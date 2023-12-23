'use strict';

const pluginId = require("../admin/src/utils/pluginId");

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'CKEditorVideo',
    plugin: pluginId,
    type: 'richtext'
  })
};
