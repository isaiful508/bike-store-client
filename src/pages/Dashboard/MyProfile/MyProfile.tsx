import React, { useEffect, useState } from 'react';
import { KeyRound, Save, User } from 'lucide-react';

import { useSelector } from 'react-redux';
import { useCurrentUser } from '../../../redux/features/auth/authSlice';
import { useGetAllUserQuery, useUpdateUserMutation } from '../../../redux/features/user/userApi';

interface User {
    _id: string;
    name: string;
    email: string;
    isActive: boolean;
    role: "customer" | "admin";
    createdAt: string;
    updatedAt: string;
}
const MyProfile = () => {
    const user: User = useSelector(useCurrentUser);
    const { data: users = [], isLoading, refetch } = useGetAllUserQuery();

    const [updateUser] = useUpdateUserMutation();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [userId, setUserId] = useState<string | null>(null);
 
    useEffect(() => {
            const matchedUser = users?.data?.find(u => u?.email === user?.email);
            console.log(matchedUser);
            if (matchedUser) {
                setUserId(matchedUser._id);
            }
        
    }, [users, user?.email]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        if (newPassword.length < 6) {
            setError('New password must be at least 8 characters long');
            return;
        }

        if (!userId) {
            setError('User not found or email mismatch');
            return;
        }

        try {
            // Call the updateUser mutation to update the password
            const response = await updateUser({
                UserId: userId,
                updatedUser: confirmPassword,
            });
            console.log(response);
            // Handle success response
            if (response?.data) {
                setSuccess('Password updated successfully');
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                setError('Failed to update password. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error(err);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                    <User className="w-6 h-6 text-gray-600" />
                    <h1 className="text-2xl font-semibold text-gray-800">Profile Settings</h1>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <h2 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
                        <KeyRound className="w-5 h-5 text-gray-600" />
                        Change Password
                    </h2>

                    <form onSubmit={handleSubmit} className="max-w-md">
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
                                {error}
                            </div>
                        )}
                        
                        {success && (
                            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-md">
                                {success}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your current password"
                                />
                            </div>

                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your new password"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Confirm your new password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                <Save className="w-4 h-4" />
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
