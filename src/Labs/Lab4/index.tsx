import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DataStateVariables from "./DataStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples/index"

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }
    return (
        <div id="wd-passing-functions">
            <h2>Lab 4</h2>
            <ClickEvent/>
            <PassingFunctions theFunction={sayHello} />
            <PassingDataOnEvent />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables/>
            <DataStateVariables />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples/>
        </div>
    );
}