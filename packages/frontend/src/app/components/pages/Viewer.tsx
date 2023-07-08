import RenderJson from 'packages/frontend/src/utils/RenderJson';
import { RenderLatexCommands } from 'packages/frontend/src/utils/RenderLatexCommands';
import React from 'react';

type ViewerProps = {};

type Data = {
  readonly type: string;
  readonly content: any;
  readonly settings: {
    readonly latex: any;
  };
};

type ViewerState = {
  readonly isFetching: boolean;
  readonly data: Data | undefined;
};

export class Viewer extends React.Component<ViewerProps, ViewerState> {
  public constructor(props: ViewerProps) {
    super(props);

    this.state = { isFetching: false, data: undefined };
  }

  public async componentDidMount(): Promise<void> {
    this.setState({ ...this.state, isFetching: true });

    const response = await fetch('http://localhost:3333/api/page');
    const data = await response.json();

    this.setState({ ...this.state, isFetching: false, data: data });
  }

  public render() {
    if (!this.state.data) {
      return <div>Data is empty!</div>;
    }

    return (
      <div>
        {RenderLatexCommands(this.state.data.settings.latex)}
        <div>{RenderJson(this.state.data)}</div>
      </div>
    );
  }
}
