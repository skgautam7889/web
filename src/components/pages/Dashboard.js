import { employeesData } from "../data/Index";
import React from 'react';
import Swal from 'sweetalert2';
const Dashboard = (setIsAuthenticated) => {
    console.log("employeesData==>", employeesData);
    const handleLogout = () => {
        Swal.fire({
            icon: 'question',
            title: 'Logging Out',
            text: 'Are you sure you want to log out?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.value) {
                Swal.fire({
                    timer: 1500,
                    showConfirmButton: false,
                    willOpen: () => {
                        Swal.showLoading();
                    },
                    willClose: () => {
                        localStorage.setItem('is_authenticated', false);
                        setIsAuthenticated(false);
                        // window.location.href = '/';//
                        
                    },
                });
            }
        });
    };
    return (
        <>
            <div className="container">
                <button
                    style={{ marginLeft: '12px' }}
                    className="muted-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>Email</th>
                            <th>salary</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesData.map((emp, key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Dashboard;