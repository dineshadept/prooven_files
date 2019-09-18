export class GenericUtil {
    static getDomainReqUrl(req: any): String {
        return `${req.protocol}://${req.get('host')}`;
    }
}