const meow = require('meow')
const debug = require('./debug')
const {sceneWelcome, sceneChapter, sceneCharacter} = require('../init')
const {helpText, options} = require('../components/cli')

const helper = meow(helpText, options)

helper.flags.chapter = helper.flags.chapter || helper.flags.capítulo
helper.flags.capítulo = helper.flags.capítulo || helper.flags.chapter
const welcome = helper.flags.welcome
const capitulo = helper.flags.capítulo || helper.flags.chapter
const qtdRow = helper.flags.qtdRow
const next = helper.flags.next
const rangeBegin = helper.flags.rangeBegin
const latest = helper.flags.latest
const first = helper.flags.first
const page = helper.flags.page
const clear = helper.flags.clear
const clearAll = helper.flags.clearAll
const character = helper.flags.character
const characterName = helper.flags.name
const characterGender = helper.flags.gender
const characterAge = helper.flags.age
const characterVersion = helper.flags.version
const characterBirth = helper.flags.birth
const characterBirthplace = helper.flags.birthplace

async function goAsync() {
	if (welcome) {
		sceneWelcome(clear)
	}

	if (capitulo) {
		sceneChapter(capitulo, page, qtdRow, first, next, rangeBegin, latest)
	}

	if (character) {
		sceneCharacter(
			character,
			characterName,
			characterGender,
			characterAge,
			characterVersion,
			characterBirth,
			characterBirthplace
		)
	}
	helper.input.includes('help') && helper.showHelp(0)
	helper.input.includes('versão') && helper.showVersion(0)
	helper.flags.debug && debug(helper.flags.debug, helper.flags, helper.input)
}
module.exports = {
	helper,
	goAsync,
	clearAll
}
