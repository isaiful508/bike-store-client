import { Users } from "lucide-react";
import {  useGetAllUserQuery, useToggleUserStatusMutation} from "../../../redux/features/user/userApi";

interface User {
    _id: string;
    name: string;
    email: string;
    userStatus: "active" | "inactive";
    role: "user" | "admin";
    isActive:boolean,
    createdAt: string;
    updatedAt: string;
}

const statusColors = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-red-100 text-red-800",
};

const roleColors = {
    admin: "bg-purple-100 text-purple-800",
    user: "bg-blue-100 text-blue-800",
};

const ManageUsers = () => {
    const { data: users = [], isLoading ,refetch} = useGetAllUserQuery();
    const [toggleUserStatus] = useToggleUserStatusMutation();

    const handleToggleUserStatus = async (user: User) => {
        try {
            await toggleUserStatus({ userId: user._id, isActive: !user.isActive });
            refetch(); // Refresh user list
        } catch (error) {
            console.error("Error updating user status:", error);
        }
    };
    
    
    

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Manage Users
                </h1>
                {/* Filters */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="border rounded-md p-2"
                    />
                    <select
                        className="border rounded-md p-2"
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <select
                        className="border rounded-md p-2"
                    >
                        <option value="all">All Roles</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>

            {/* Users Table */}
            {isLoading ? (
                <div>Loading...</div> // Show loading indicator
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {/* @ts-ignore */}
                                {users.data.map((user: User) => (
                                    <tr  className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${roleColors[user.role]}`}>{user.role}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${statusColors[user.userStatus]}`}>{user.userStatus}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(user.updatedAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleToggleUserStatus(user)}
                                                className={`px-3 py-1 rounded-md ${
                                                    user.role === "admin" ? " text-gray-500 cursor-not-allowed" : "text-blue-600 hover:text-blue-900"
                                                }`}
                                                disabled={user.role === "admin"}
                                            >
                                                {user.isActive  ? "Deactivate" : "Activate"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageUsers;
