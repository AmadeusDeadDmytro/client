import {PureComponent} from "react";
import {Button, Card, NonIdealState} from "@blueprintjs/core";
import {RouterProps} from "react-router-dom";

class PageNotFound extends PureComponent<RouterProps> {
    render () {
        return (
            <div style={{textAlign: "center"}}>
                <Card elevation={2}>
                    <NonIdealState
                        description="Страницы нет"
                        action={<Button onClick={() => this.props.history.push("/")}>Home</Button>}
                    />
                </Card>
            </div>
        )
    }
}
export default PageNotFound