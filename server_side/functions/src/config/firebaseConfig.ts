const firebaseInit = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyD9yu51sX2XhNHkS7cWMa8i0x5lNg9dFgo",
    authDomain: "prooven1-95022.firebaseapp.com",
    databaseURL: "https://prooven1-95022.firebaseio.com",
    projectId: "prooven1-95022",
    storageBucket: "prooven1-95022.appspot.com",
    messagingSenderId: "723863466194",
    appId: "1:723863466194:web:4c31f93e2af1777a"
};

const serviceAcctountConfig = {
    "type": "service_account",
    "project_id": "prooven1-95022",
    "private_key_id": "88f77be54c7cfec3a513471ecd43cb944a06d56a",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDnVdztOG0ievrj\nKdXy8OGPNVayKxbv1tW9k9+6i5GDswANk69w2wmhqIUUlQd2S24oqbVe+gRF+tTn\nHcPNrwMKxPx8dfsmc6mV5lZz7Wa6kyUEj3yYI101TkUD9hAZJ7SYBjgwC0KIcDXM\nuOCuIUXwYFA4o1D9WR4wfXZ56aYEyyFtauKgMpuAVPOiN85qmgjRNZQBaI5yXzDv\noLLUGn3TmEWzxInNc8aBLRTjFF4zb2K/hHi66BNRiC/SOigeLnnoMGDWiAJH75Hl\nv3Ch/bF7pkNZLabNY88kw4DI8Yta3GvzdRB/PKfV74UzeJ2OkpdxqWVwWDTIfpp4\nWtrpeUVpAgMBAAECggEAF17jaURFc0GvGba65nabJP1/nxOPF0cSFBtNs5IAzwgt\nCdIZG+rHAfHNUwdcyADGFd3SRNB3kM3OxzQIuV10TljZBKZjK27tK6eH5aGO2qu9\npkSsMs8Ezjs0afpohTAPlLmxILpse+3xI3fse+8A2rBSPmySZKvlisLMDrQx+WMO\ndkfX/OhZkq/I57Z4yqlgNM7peUOMZkodTcrU+3p8tMop2A7Z187V5YkeEgB7Lf0+\nq7EfBJm/59V2FycbeY/+in9d9lj+xbY2VUdMV5uOlI44zWnsOchh1Loe77U8KNkr\n00Y/38xPGbEaiZY2ZEmCd1Erzj3wXoAMwiOusHtV0QKBgQD2nKbZbo/e05iBvxOq\nah3+mlbHUoJhU21iYkF1o4nCAVcVMjXO87G7NU88exeAHu3tUBl2XvmHI+c8YRYo\n2rHOCLhM+wyRIBJN3dUgqpOBJ1gq7I4TCJqlwMtzRHRID25y2ZnYidhz7MzhjwXS\n5Rjso1qxf4+Bom3QuDhnGg3yEQKBgQDwJFWdryaD0MrdE/nJgnUOY0/T1ZkCB45h\nKAntYu2wMkkhTUxdPqiZXkzDXNhiY9mzsHOvtSqegKOi5G3Mye7qHXuHr7Hvv54f\nhDcY+R/0CSCij8CClCehvhmtBkc5Ic2OrRPVcQ+gMFSBDu24VGe2NZK0wYK8JoSo\nqjB3MmDF2QKBgF0nx48SyJ3vaAh62T7iXvox6t3YOQ/yp7smSnvZjswOHYsQMGtA\ner6w4IGELdhj1pRyUWv5bGC0G0Efm3NLSSb+/D94BcM8Ti3DwiJYzOdYqWFtgi2G\nboR2U2PzU8l0qtAPiqHVUEJaDPqXQCfuCoA5JKUv/lGFvd29+PBZUzNBAoGAI6CQ\nXyuMIERKxI/hICdNrIvJXRk0cRuj4QAqsOBbeSeMt/ca3D6ejtpxsw5EQBymQMVt\n9GSBZTCalmEjdR2EZ5FmMVQ8puAb2nsoHXlgZzkvcU64deb7FkD42DW1PWGpeIBv\nD9yNP+vLrbYESLOlC2BZWp3XAokIZ2mQdS6xMskCgYBtV+tJ4TMCnsKPg7YA0t6E\nOzTCK6O4gBxy5w8/v3o2JCl432QdGUIy+6cJGwyhUYHEpcR2uy5tm4wsxZSJqAZ2\nX7W2/gpO87LvE1lur96TJVdcdwQF0NlgOLf8N2RqSSdwhn30zuBEXuL9oE72J+7s\nw40xSQsV5Zlu8RFUoVqjNQ==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-jz0o5@prooven1-95022.iam.gserviceaccount.com",
    "client_id": "113586886020816490558",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jz0o5%40prooven1-95022.iam.gserviceaccount.com"
}

export const firebase = firebaseInit.initializeApp(firebaseConfig);

const {Storage} = require('@google-cloud/storage');
const storage = new Storage({
    projectId: "prooven1-95022",
    credentials: serviceAcctountConfig
});
export const bucket = storage.bucket("prooven1-95022.appspot.com");