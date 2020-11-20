import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const PhraseSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		phrase: {
			type: String,
			trim: true,
			required: true,
		},
		description: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{
		collection: 'phrases',
	}
);

PhraseSchema.plugin(timestamps);

PhraseSchema.index({ createdAt: 1, updatedAt: 1 })

export const Phrase = mongoose.model('Phrase', PhraseSchema)
export const PhraseTC = composeWithMongoose(Phrase)
