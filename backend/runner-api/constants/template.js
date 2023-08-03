import config from "config";

const TEMPLATE = {
    fact: (fact) => `
        <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js"></script>
            <script>
                function bookmark() {
                    axios.post(
                        'http://localhost:${config.get('port')}/bookmark/${fact.permalink}'
                    );
                }
            </script>
        </head>
        <body>
            <h2>${fact.text}</h2>
            <small>Language: ${fact.language}<small>
            <br />
            <button onclick=()>Bookmark</button>
            <a href="http://localhost:${config.get('port')}/fact">Refetch</a> 
        <body>
    `
};

export default TEMPLATE;