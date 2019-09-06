import {authDefs} from './AuthController';
import {utilDefs} from './UtilController';
import {transcriptsDefs} from './TranscriptsController';
import {notUsedDefs} from './NotUsedController';

export const mainDefs = function () {
    utilDefs();
    authDefs();
    transcriptsDefs();
    notUsedDefs();
}
