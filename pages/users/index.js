import React from "react";

const index = ({ users }) => {
    return (
        <div>
            <h1>This is users page</h1>
            <h2>users : {users.length}</h2>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

export default index;
