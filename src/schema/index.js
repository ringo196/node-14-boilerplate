import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './user';
import { PhraseQuery, PhraseMutation } from './phrase';

schemaComposer.Query.addFields({
	...UserQuery,
	...PhraseQuery,
});

schemaComposer.Mutation.addFields({
	...UserMutation,
	...PhraseMutation,
});

export default schemaComposer.buildSchema();
