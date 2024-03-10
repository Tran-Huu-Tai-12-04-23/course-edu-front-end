import AdminLayout from '../../../../layouts/AdminLayout';
import CreatePost from '../../../post/create';

function AddPost() {
    return (
        <AdminLayout>
            <div className="bg-light-sidebar dark:bg-dark-sidebar rounded-xl mt-5">
                <CreatePost />
            </div>
        </AdminLayout>
    );
}

export default AddPost;
