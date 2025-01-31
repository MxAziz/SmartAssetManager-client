import React from 'react';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import useAuth from './../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const AllRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const {
        data: allRequestAsset = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allRequestAsset"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allRequestAsset");
            return res.data;
        },
    });
    console.log(allRequestAsset);

    if (isLoading) return <p>Loading...</p>;
    return (
        <div >

        </div>
    );
};

export default AllRequest;