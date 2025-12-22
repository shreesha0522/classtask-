export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            Example Test ID: {id}
        </div>
    );
}

//make the following route path
//practice/users
//->Display "Users Page" text on the page
//practice/users/settings
//->Display "Users Settings " text on the page
//practice/users/settings/privacy
//->Display "Users Privacy " text on the page
//practice /users/data[id]
//->display "user data page:{id}" text on the page
//practice /users/data[id]/edit
//->display "Edit User Data Page:{id}" text on the page
//make layouts for /practice/users
//to includ User Header and User Footer