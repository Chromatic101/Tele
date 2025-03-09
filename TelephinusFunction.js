document.addEventListener('DOMContentLoaded', function() {
    const roleSelection = document.getElementById('role-selection');
    const authOptions = document.getElementById('auth-options');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const mainContent = document.getElementById('main-content');
    const roleSpan = document.getElementById('role');

    const studentBtn = document.getElementById('student-btn');
    const teacherBtn = document.getElementById('teacher-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const backToAuth = document.getElementById('back-to-auth');
    const backToAuthLogin = document.getElementById('back-to-auth-login');

    studentBtn.addEventListener('click', function() {
        roleSelection.style.display = 'none';
        authOptions.style.display = 'block';
        roleSpan.textContent = 'Student';
    });

    teacherBtn.addEventListener('click', function() {
        roleSelection.style.display = 'none';
        authOptions.style.display = 'block';
        roleSpan.textContent = 'Teacher';
    });

    signupBtn.addEventListener('click', function() {
        authOptions.style.display = 'none';
        signupForm.style.display = 'block';
    });

    loginBtn.addEventListener('click', function() {
        authOptions.style.display = 'none';
        loginForm.style.display = 'block';
    });

    backToAuth.addEventListener('click', function() {
        signupForm.style.display = 'none';
        authOptions.style.display = 'block';
    });

    backToAuthLogin.addEventListener('click', function() {
        loginForm.style.display = 'none';
        authOptions.style.display = 'block';
    });

    document.getElementById('signup').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle signup logic here
        alert('Signup successful!');
        signupForm.style.display = 'none';
        mainContent.style.display = 'block';
        loadMainContent();
    });

    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle login logic here
        alert('Login successful!');
        loginForm.style.display = 'none';
        mainContent.style.display = 'block';
        loadMainContent();
    });

    function loadMainContent() {
        const datesContainer = document.querySelector('.dates');
        const notificationList = document.getElementById('notification-list');
        const announcementsList = document.getElementById('announcements-list');
        const pendingActivitiesList = document.getElementById('pending-activities-list');
        const profileInfo = document.getElementById('profile-info');

        const holidays = {
            '2025-02-25': 'EDSTI Revolution - No Classes',
            '2025-02-28': 'Name of Event - Location: TBD'
        };

        const emergencies = {
            '2025-02-14': 'Emergency Drill'
        };

        const announcements = [
            { date: '2025-02-15', reason: 'Typhoon', message: 'NO CLASSES DUE TO STRONG TYPHOON. ALL PEOPLE INSIDE THE CAMPUS ARE ISSUED TO GO HOME.' }
        ];

        const pendingActivities = [
            { task: 'Narrative Report', deadline: 'Feb 6 (Thu)', subject: 'WI' },
            { task: 'Worksheet(Week 4)', deadline: 'Feb 6 (Thu)', subject: '21st Century Literacy' },
            { task: 'P’T1 Mind Mapping', deadline: 'Mar 14 (Mon)', subject: 'Personal Development' },
            { task: '500 Words Essay', deadline: 'Mar 20 (Tue)', subject: '21st Century Literacy' }
        ];

        const profileData = {
            name: 'Alex Pen',
            email: 'akmturingan@pcu.edu.ph',
            gradeSection: 'Grade 12 E-SHILOH',
            strand: 'TVL-ICT-CP',
            gender: 'Male',
            birthday: 'November 24, 2006'
        };

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        let datesHTML = '';

        for (let i = 0; i < firstDay.getDay(); i++) {
            datesHTML += '<div class="date"></div>';
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(year, month, i);
            const dateString = date.toISOString().split('T')[0];
            let dateClass = 'date';
            let notification = '';

            if (holidays[dateString]) {
                dateClass += ' holiday';
                notification = holidays[dateString];
            }

            if (emergencies[dateString]) {
                dateClass += ' emergency';
                notification = emergencies[dateString];
            }

            datesHTML += `<div class="${dateClass}">${i}</div>`;
            if (notification) {
                const li = document.createElement('li');
                li.textContent = `${dateString}: ${notification}`;
                notificationList.appendChild(li);
            }
        }

        datesContainer.innerHTML = datesHTML;

        announcements.forEach(announcement => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${announcement.date}: ${announcement.reason}</strong><br>${announcement.message}`;
            announcementsList.appendChild(div);
        });

        pendingActivities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = `${activity.task} - ${activity.deadline} (${activity.subject})`;
            pendingActivitiesList.appendChild(li);
        });

        profileInfo.innerHTML = `
            <p><strong>Name:</strong> ${profileData.name}</p>
            <p><strong>Email:</strong> ${profileData.email}</p>
            <p><strong>Grade/Section:</strong> ${profileData.gradeSection}</p>
            <p><strong>Strand:</strong> ${profileData.strand}</p>
            <p><strong>Gender:</strong> ${profileData.gender}</p>
            <p><strong>Birthday:</strong> ${profileData.birthday}</p>
        `;
    }
});