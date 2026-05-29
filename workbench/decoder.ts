export class TBLDecoder {
  pos = 0
  header: {
    crc: number
    nodesNumber: number
    hashTableSize: number
    version: number
    dataStartOffset: number
    hashMaxTries: number
    fileSize: number
  } = null!
  indices: number[] = []
  nodes: {
    active: number
    idx: number
    hashValue: number
    keyOffset: number
    valOffset: number
    valLength: number
  }[] = []
  entries: {
    idx: number
    key: string
    value: string
  }[] = []

  constructor(public buffer: Buffer) {
    this.parse()
  }

  parse() {
    this.header = {
      crc: this.read2(),
      nodesNumber: this.read2(),
      hashTableSize: this.read4(),
      version: this.read1(),
      dataStartOffset: this.read4(),
      hashMaxTries: this.read4(),
      fileSize: this.read4()
    }

    for (let i = 0; i < this.header.nodesNumber; i++) this.indices.push(this.read2())

    for (let i = 0; i < this.header.hashTableSize; i++) {
      this.nodes.push({
        active: this.read1(),
        idx: this.read2(),
        hashValue: this.read4(),
        keyOffset: this.read4(),
        valOffset: this.read4(),
        valLength: this.read2()
      })
    }

    for (const node of this.nodes) {
      if (node.active !== 1) {
        console.log('skip inactive node')
        continue
      }
      this.entries.push({
        idx: node.idx,
        key: this.readStr(node.keyOffset),
        value: this.readStr(node.valOffset, 'utf-8')
      })
    }

    this.entries.sort((a, b) => a.idx - b.idx)
  }

  read1() {
    const data = this.buffer.readUInt8(this.pos)
    this.pos += 1
    return data
  }

  read2() {
    const data = this.buffer.readUInt16LE(this.pos)
    this.pos += 2
    return data
  }

  read4() {
    const data = this.buffer.readUInt32LE(this.pos)
    this.pos += 4
    return data
  }

  readStr(offset: number, encoding: BufferEncoding = 'latin1') {
    let end = offset
    while (end < this.buffer.length && this.buffer[end] !== 0) end++
    return this.color(this.buffer.subarray(offset, end).toString(encoding))
  }

  color(str: string) {
    for (let i = 0x30; i <= 0x3b; i++) {
      str = str.replaceAll(
        `\u00ffc${String.fromCharCode(i)}`,
        `COLOR${(i - 0x30).toString().padStart(2, '0')}->`
      )
    }
    return str
  }
}
