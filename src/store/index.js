import { combineReducers } from "redux";

import stateUrl from "./Url/reducerUrl";

import stateStyle from "./Style/reducerStyle";

import stateBasisReport from "./BasisReport/reducers/reducerBasisReport";
import stateFlagsBasisReport from "./BasisReport/reducers/reducerFlagsBasisReport";
import focusData from "./BasisReport/reducers/reducerFocusData";

import stateUser from "./User/reducers/reducerUser";
import stateInputEditWindowUser from "./User/reducers/reducerEditWindowUser";
import stateCompareUser from "./User/reducers/reducerCompareUser";
import stateLinksUser from "./User/reducers/reducerLinksUser";
import stateFlagsUser from "./User/reducers/reducerFlagsUser";

import stateEltypeClass from "./EltypeClass/reducers/reducerEltypeClass";
import stateFlagsEltypeClass from "./EltypeClass/reducers/reducerFlagsEltypeClass";
import stateCompareEltypeClass from "./EltypeClass/reducers/reducerCompareEltypeClass";
import stateLinksEltypeClass from "./EltypeClass/reducers/reducerLinksEltypeClass";
import stateInputEditWindowEltypeClass from "./EltypeClass/reducers/reducerEditWindowEltypeClass";

import stateViewType from "./ViewType/reducers/reducerViewType";
import stateInputEditWindowViewType from "./ViewType/reducers/reducerEditWindowViewType";
import stateCompareViewType from "./ViewType/reducers/reducerCompareViewType";
import stateLinksViewType from "./ViewType/reducers/reducerLinksViewType";
import stateFlagsViewType from "./ViewType/reducers/reducerFlagsViewType";

import stateFlagsAll from "./Flags/reducerFlags";
import stateDescription from "./Description/reducerDescription";

import stateAuthorization from "./Authorization/reducerAuthorization";


const rootReducer = combineReducers({
    stateUrl,
    stateStyle,
    stateAuthorization,
    stateBasisReport,
    stateFlagsBasisReport,
    focusData,
    stateUser,
    stateInputEditWindowUser,
    stateCompareUser,
    stateLinksUser,
    stateFlagsUser,
    stateEltypeClass,
    stateInputEditWindowEltypeClass,
    stateFlagsEltypeClass,
    stateCompareEltypeClass,
    stateLinksEltypeClass,
    stateViewType,
    stateInputEditWindowViewType,
    stateCompareViewType,
    stateLinksViewType,
    stateFlagsViewType,
    stateFlagsAll,
    stateDescription

})

export default rootReducer