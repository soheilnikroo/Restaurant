import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer PKcW2ixtdfShNbD150Cl0a5ZTfKGOcqaTdjN1rin0t9xXnAE5Yokb9pFzqSGW9Szu-rrlct3nt_5AbPvdsjTHeeGzC4uOf-yxxd8xIwPRnPPcL_h0s4vCvZiQ_aTYHYx'
    }
});