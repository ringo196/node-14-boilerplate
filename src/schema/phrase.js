import { Phrase, PhraseTC } from '../models/phrase'

const PhraseQuery = {
	phraseById: PhraseTC.getResolver('findById'),
	phraseByIds: PhraseTC.getResolver('findByIds'),
	phraseOne: PhraseTC.getResolver('findOne'),
	phraseMany: PhraseTC.getResolver('findMany'),
	phraseCount: PhraseTC.getResolver('count'),
	phraseConnection: PhraseTC.getResolver('connection'),
	phrasePagination: PhraseTC.getResolver('pagination'),
}

const PhraseMutation = {
	phraseCreateOne: PhraseTC.getResolver('createOne'),
	phraseCreateMany: PhraseTC.getResolver('createMany'),
	phraseUpdateById: PhraseTC.getResolver('updateById'),
	phraseUpdateOne: PhraseTC.getResolver('updateOne'),
	phraseUpdateMany: PhraseTC.getResolver('updateMany'),
	phraseRemoveById: PhraseTC.getResolver('removeById'),
	phraseRemoveOne: PhraseTC.getResolver('removeOne'),
	phraseRemoveMany: PhraseTC.getResolver('removeMany'),
}

export { PhraseQuery, PhraseMutation }
