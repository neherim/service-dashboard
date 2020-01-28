import React from "react";
import {ProjectDiagram} from "./Diagram/ProjectDiagram";
import {DiagramCanvasWidget} from "./Diagram/DiagramCanvasWidget";
import styled from "@emotion/styled";
import {ProjectSchema} from "./Diagram/schema";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import {Alignment, Button, ButtonGroup, Divider, Navbar, NavbarGroup, NavbarHeading} from "@blueprintjs/core";

interface WorkspaceWidgetProps {
}

interface WorkspaceWidgetState {
  isInEditMode: boolean;
}

export class ProjectWorkspacePage extends React.Component <WorkspaceWidgetProps, WorkspaceWidgetState> {
  diagram = new ProjectDiagram();

  constructor(props: WorkspaceWidgetProps) {
    super(props);
    this.state = {
      isInEditMode: false
    };
  }

  private handleSerialize() {
    console.log(this.diagram.serializeModel());
  }

  private handleEdit() {
    this.diagram.startEdit();
    this.setState({
      isInEditMode: true
    });
  }

  private handleSave() {
    this.diagram.saveChanges();
    this.setState({
      isInEditMode: false
    });
  }

  private handleSchema1() {
    this.diagram.deserialize(schemaExample1);
  }

  private handleSchema2() {
    console.log(this.diagram.serializeToSchema());
  }

  render() {
    return (
      <Container className="bp3-dark">
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <ButtonGroup minimal={true}>
              <NavbarHeading>Service Diagram</NavbarHeading>
              <Divider/>
              <Button icon="zoom-in" onClick={() => this.diagram.zoomIn()}/>
              <Button icon="zoom-out" onClick={() => this.diagram.zoomOut()}/>
              <Button icon="zoom-to-fit" onClick={() => this.diagram.zoomToFit()}/>
              <Divider/>
              <Button icon="edit" onClick={() => this.handleEdit()}/>
              <Button icon="floppy-disk" onClick={() => this.handleSave()}/>
              <Divider/>
              <Button icon="export" onClick={() => this.handleSerialize()}/>
              <Button icon="envelope" onClick={() => this.handleSchema1()}/>
              <Button icon="envelope" onClick={() => this.handleSchema2()}/>
            </ButtonGroup>
          </NavbarGroup>
        </Navbar>

        <DiagramCanvasWidget
          diagram={this.diagram}
          showGrid={this.state.isInEditMode}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100%;
`;

export const schemaExample1: ProjectSchema = {
  services: [
    {
      id: "1",
      name: "scrooge-message-registry",
      position: {
        x: 105,
        y: 75
      },
      ports: [
        {
          id: "2",
          name: "SendOutputResponseCommand",
          input: true
        },
        {
          id: "3",
          name: "ProcessInputRequestCommand",
          input: false
        }
      ]
    },
    {
      id: "4",
      name: "scrooge-person",
      position: {
        x: 615,
        y: 75
      },
      ports: [
        {
          id: "5",
          name: "ProcessInputRequestCommand",
          input: true
        },
        {
          id: "6",
          name: "SendOutputResponseCommand",
          input: false
        },
        {
          id: "7",
          name: "PersonalDataUpdated",
          input: false
        },
        {
          id: "8",
          name: "OrganizationChanged",
          input: false
        }
      ]
    },
    {
      id: "9",
      name: "scrooge-statement",
      position: {
        x: 615,
        y: 195
      },
      ports: [
        {
          id: "10",
          name: "ProcessInputRequestCommand",
          input: true
        },
        {
          id: "11",
          name: "SendOutputResponseCommand",
          input: false
        }
      ]
    }
  ],

  links: [
    {
      id: "41",
      from: "3",
      to: "5",
      points: []
    },
    {
      id: "42",
      from: "6",
      to: "2",
      points: [
        {
          x: 984.40625,
          y: 108.5
        },
        {
          x: 1030,
          y: 108.5
        },
        {
          x: 1030,
          y: 30
        },
        {
          x: 67,
          y: 30
        },
        {
          x: 67,
          y: 108.5
        },
        {
          x: 114.5,
          y: 108.5
        }
      ]
    },
    {
      id: "43",
      from: "3",
      to: "10",
      points: []
    }
  ]
};

export const schemaExample2: ProjectSchema = {
  services: [
    {
      id: "1",
      name: "scrooge-message-registry",
      position: {
        x: 105,
        y: 75
      },
      ports: [
        {
          id: "2",
          name: "SendOutputResponseCommand",
          input: true
        },
        {
          id: "3",
          name: "ProcessInputRequestCommand",
          input: false
        }
      ]
    },
    {
      id: "4",
      name: "scrooge-person",
      position: {
        x: 615,
        y: 75
      },
      ports: [
        {
          id: "5",
          name: "ProcessInputRequestCommand",
          input: true
        },
        {
          id: "6",
          name: "SendOutputResponseCommand",
          input: false
        },
        {
          id: "7",
          name: "PersonalDataUpdated",
          input: false
        },
        {
          id: "8",
          name: "OrganizationChanged",
          input: false
        }
      ]
    },
    {
      id: "9",
      name: "scrooge-statement",
      position: {
        x: 615,
        y: 195
      },
      ports: [
        {
          id: "10",
          name: "ProcessInputRequestCommand",
          input: true
        },
        {
          id: "11",
          name: "SendOutputResponseCommand",
          input: false
        }
      ]
    },
    {
      id: "101",
      name: "scrooge-statement",
      position: {
        x: 50,
        y: 50
      },
      ports: [
        {
          id: "201",
          name: "IN",
          input: true
        },
        {
          id: "202",
          name: "OUT",
          input: false
        }
      ]
    }
  ],

  links: [
    {
      id: "41",
      from: "3",
      to: "5",
      points: []
    },
    {
      id: "42",
      from: "6",
      to: "2",
      points: []
    },
    {
      id: "43",
      from: "3",
      to: "10",
      points: []
    }
  ]
};
