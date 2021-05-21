import { Button } from '@material-ui/core';
import React from 'react';

const news = () => {
    return (
        <div>
            <h2>this is news</h2>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="secondary">
  Secondary
</Button>

        </div>
    );
};

export default news;