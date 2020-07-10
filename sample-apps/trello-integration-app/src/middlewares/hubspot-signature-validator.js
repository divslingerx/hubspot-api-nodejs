const SIGNATURE_HEADER = 'X-HubSpot-Signature'
const SIGNATURE_VERSION_HEADER = 'X-HubSpot-Signature-Version'
const hubspotClientHelper = require('../helpers/hubspot-client-helper')
const dbHelper = require('../helpers/db-helper')
const _ = require('lodash')

module.exports = async (req, res, next) => {
    try {
        const baseUrl = await dbHelper.getUrl()
        const webhooksUrl = `${baseUrl}${req.originalUrl}`
        const requestBody = _.isEmpty(req.body) ? '' : JSON.stringify(req.body)
        const signature = req.header(SIGNATURE_HEADER)
        const clientSecret = process.env.HUBSPOT_CLIENT_SECRET
        const signatureVersion = req.header(SIGNATURE_VERSION_HEADER)
        const hubspotClient = await hubspotClientHelper.getHubspotClient()

        if (
            hubspotClient.webhooks.validateSignature(
                signature,
                clientSecret,
                requestBody,
                signatureVersion,
                webhooksUrl,
                req.method,
            )
        )
            return next()
    } catch (e) {
        console.log(e)
    }

    next(new Error('Unauthorized webhook or error with request processing!'))
}
