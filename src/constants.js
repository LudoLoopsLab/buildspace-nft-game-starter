const CONTRACT_ADDRESS = '0xc0Eb92483208436F6cFC35D57210385eDD234E16'

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  }
}

export { CONTRACT_ADDRESS, transformCharacterData }