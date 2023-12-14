import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Task {
    id: number;
    title: string;
    description?: string;
    status: 'inWork' | 'onHold' | 'done';
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/example'
    }),
    endpoints: (builder) => ({
        fetchCompletedTasks: builder.query<Task[], void>({
            query: () => '/tasks/done',
        }),
    }),
});

export const { useFetchCompletedTasksQuery } = api;
