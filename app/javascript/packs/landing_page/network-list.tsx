import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {PanelComponent} from './panel';
import {Network} from './models';

interface Props {
    networks: Array<Network>
}

/**
 * A list over all of the networks that has been trained, together with some
 * meta-information.
 */
export class NetworksList extends React.PureComponent<Props, {}> {
    static format(n: number) {
        return n.toLocaleString();
    }

    render() {
        return <PanelComponent className='recent-network-list no-padding'
                               title='Networks'
        >
            {this.props.networks.map((network) => {
                return <div key={network.id} className='row'>
                    <span className='title'>
                        {network.name}
                    </span>
                    <span className='number-of-features'>
                        {NetworksList.format(network.number_of_features)}
                    </span>
                </div>;
            })}
        </PanelComponent>;
    }
}
