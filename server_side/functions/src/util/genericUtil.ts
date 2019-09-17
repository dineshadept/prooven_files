export class GenericUtil {
    static getFullReqUrl(req: any): String {
        return `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    }
}