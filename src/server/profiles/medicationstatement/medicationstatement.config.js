const {route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const medicationstatement_args = require('./medicationstatement.arguments');
const controller = require('./medicationstatement.controller');

let write_only_scopes = write_scopes('MedicationStatement');
let read_only_scopes = read_scopes('MedicationStatement');

let routes = [
	{
		type: 'get',
		path: '/:version/medicationstatement',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.EFFECTIVE),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.MEDICATION),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.PART_OF),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.SOURCE),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationStatement
	},
	{
		type: 'post',
		path: '/:version/medicationstatement/_search',
		corsOptions: {methods: ['POST']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.EFFECTIVE),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.MEDICATION),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.PART_OF),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.SOURCE),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, medicationstatement_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationStatement
	},
	{
		type: 'get',
		path: '/:version/medicationstatement/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationStatementById
	},
	{
		type: 'post',
		path: '/:version/medicationstatement',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMedicationStatement
	},
	{
		type: 'put',
		path: '/:version/medicationstatement/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMedicationStatement
	}
];

/**
 * @name exports
 * @summary MedicationStatement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATIONSTATEMENT
	},
	routes
};
