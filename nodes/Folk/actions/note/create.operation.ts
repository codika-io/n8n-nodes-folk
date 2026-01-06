import type { INodeProperties } from 'n8n-workflow';

const displayOptions = {
	show: {
		resource: ['note'],
		operation: ['create'],
	},
};

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'entityId',
		type: 'string',
		required: true,
		default: '',
		displayOptions,
		description: 'The ID of the person or company to attach this note to',
		routing: {
			send: {
				type: 'body',
				property: 'entity.id',
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		required: true,
		default: '',
		displayOptions,
		description: 'The content of the note (supports markdown, max 100,000 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'content',
			},
		},
	},
	{
		displayName: 'Visibility',
		name: 'visibility',
		type: 'options',
		required: true,
		options: [
			{
				name: 'Public',
				value: 'public',
			},
			{
				name: 'Private',
				value: 'private',
			},
		],
		default: 'public',
		displayOptions,
		description: 'The visibility of the note. Public notes are visible to all workspace users.',
		routing: {
			send: {
				type: 'body',
				property: 'visibility',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions,
		options: [
			{
				displayName: 'Parent Note ID',
				name: 'parentNoteId',
				type: 'string',
				default: '',
				description: 'The ID of the parent note (for creating reply/threaded notes)',
				routing: {
					send: {
						type: 'body',
						property: 'parentNote.id',
					},
				},
			},
		],
	},
];
