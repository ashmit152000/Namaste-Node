process.env.UV_THREADPOOL_SIZE = 2;

const THREAD_POOL_SIZE = process.env.UV_THREADPOOL_SIZE;

export default THREAD_POOL_SIZE;