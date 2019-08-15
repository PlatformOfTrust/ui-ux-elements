import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import FormGroup from './../src/Components/FormGroup/component';

storiesOf('FormGroup', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => (
        <FormGroup
            controlId={'formid'}
            muted={'this should be muted'}
            label={'Ask question'}
            type={'email'}
            placeholder={'placeholder text...'}
            text="Hello World!"
        />
    ));
