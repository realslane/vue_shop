<script>
    import axios from 'axios';

    const useFetch = async (url) => {
        const response = await axios.get(url);
        const data = await response.data;

        return data;
    }

    export default useFetch;
</script>
