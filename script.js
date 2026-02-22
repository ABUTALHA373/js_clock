var r_times = {
    "year": {
        "hijri": 1447,
        "gregorian": 2026
    },
    "location": "Dhaka, Bangladesh",
    "ramadan": [
        { "day": 1, "date": "2026-02-19", "weekday": "Thursday", "suhoor": "05:12", "iftar": "17:58" },
        { "day": 2, "date": "2026-02-20", "weekday": "Friday", "suhoor": "05:11", "iftar": "17:58" },
        { "day": 3, "date": "2026-02-21", "weekday": "Saturday", "suhoor": "05:11", "iftar": "17:59" },
        { "day": 4, "date": "2026-02-22", "weekday": "Sunday", "suhoor": "05:10", "iftar": "17:59" },
        { "day": 5, "date": "2026-02-23", "weekday": "Monday", "suhoor": "05:09", "iftar": "18:00" },
        { "day": 6, "date": "2026-02-24", "weekday": "Tuesday", "suhoor": "05:08", "iftar": "18:00" },
        { "day": 7, "date": "2026-02-25", "weekday": "Wednesday", "suhoor": "05:08", "iftar": "18:01" },
        { "day": 8, "date": "2026-02-26", "weekday": "Thursday", "suhoor": "05:07", "iftar": "18:01" },
        { "day": 9, "date": "2026-02-27", "weekday": "Friday", "suhoor": "05:06", "iftar": "18:02" },
        { "day": 10, "date": "2026-02-28", "weekday": "Saturday", "suhoor": "05:05", "iftar": "18:02" },

        { "day": 11, "date": "2026-03-01", "weekday": "Sunday", "suhoor": "05:05", "iftar": "18:03" },
        { "day": 12, "date": "2026-03-02", "weekday": "Monday", "suhoor": "05:04", "iftar": "18:03" },
        { "day": 13, "date": "2026-03-03", "weekday": "Tuesday", "suhoor": "05:03", "iftar": "18:04" },
        { "day": 14, "date": "2026-03-04", "weekday": "Wednesday", "suhoor": "05:02", "iftar": "18:04" },
        { "day": 15, "date": "2026-03-05", "weekday": "Thursday", "suhoor": "05:01", "iftar": "18:05" },
        { "day": 16, "date": "2026-03-06", "weekday": "Friday", "suhoor": "05:00", "iftar": "18:05" },
        { "day": 17, "date": "2026-03-07", "weekday": "Saturday", "suhoor": "04:59", "iftar": "18:06" },
        { "day": 18, "date": "2026-03-08", "weekday": "Sunday", "suhoor": "04:58", "iftar": "18:06" },
        { "day": 19, "date": "2026-03-09", "weekday": "Monday", "suhoor": "04:57", "iftar": "18:07" },
        { "day": 20, "date": "2026-03-10", "weekday": "Tuesday", "suhoor": "04:57", "iftar": "18:07" },

        { "day": 21, "date": "2026-03-11", "weekday": "Wednesday", "suhoor": "04:56", "iftar": "18:07" },
        { "day": 22, "date": "2026-03-12", "weekday": "Thursday", "suhoor": "04:55", "iftar": "18:08" },
        { "day": 23, "date": "2026-03-13", "weekday": "Friday", "suhoor": "04:54", "iftar": "18:08" },
        { "day": 24, "date": "2026-03-14", "weekday": "Saturday", "suhoor": "04:53", "iftar": "18:09" },
        { "day": 25, "date": "2026-03-15", "weekday": "Sunday", "suhoor": "04:52", "iftar": "18:09" },
        { "day": 26, "date": "2026-03-16", "weekday": "Monday", "suhoor": "04:52", "iftar": "18:10" },
        { "day": 27, "date": "2026-03-17", "weekday": "Tuesday", "suhoor": "04:50", "iftar": "18:10" },
        { "day": 28, "date": "2026-03-18", "weekday": "Wednesday", "suhoor": "04:49", "iftar": "18:10" },
        { "day": 29, "date": "2026-03-19", "weekday": "Thursday", "suhoor": "04:48", "iftar": "18:11" },
        { "day": 30, "date": "2026-03-20", "weekday": "Friday", "suhoor": "04:47", "iftar": "18:11" }
    ]
};

var r_adjustments = {
    "base_city": "Dhaka",
    "country": "Bangladesh",
    "total_districts": 64,
    "suhoor_offsets": {
        "Dhaka": 0,
        "Gazipur": 0,
        "Narayanganj": 0,
        "Narsingdi": 0,
        "Munshiganj": 1,
        "Madaripur": 1,
        "Shariatpur": 1,
        "Rajbari": 2,
        "Faridpur": 2,
        "Gopalganj": 2,
        "Manikganj": 1,
        "Tangail": 1,
        "Kishoreganj": 1,
        "Barishal": 1,
        "Jhalokathi": 2,
        "Patuakhali": 2,
        "Barguna": 3,
        "Bhola": 2,
        "Pirojpur": 2,
        "Khulna": 3,
        "Bagerhat": 3,
        "Satkhira": 4,
        "Chuadanga": 4,
        "Kushtia": 4,
        "Jhenaidah": 5,
        "Magura": 5,
        "Narail": 5,
        "Jashore": 5,
        "Meherpur": 6,
        "Rajshahi": 7,
        "Chapainawabganj": 8,
        "Naogaon": 7,
        "Natore": 6,
        "Pabna": 5,
        "Sirajganj": 4,
        "Bogura": 4,
        "Joypurhat": 6,
        "Dinajpur": 8,
        "Rangpur": 8,
        "Thakurgaon": 9,
        "Panchagarh": 10,
        "Nilphamari": 8,
        "Lalmonirhat": 9,
        "Kurigram": 9,
        "Gaibandha": 7,
        "Mymensingh": 2,
        "Netrokona": 3,
        "Jamalpur": 3,
        "Sherpur": 4,
        "Chattogram": -3,
        "Cox's Bazar": -4,
        "Rangamati": -2,
        "Bandarban": -3,
        "Khagrachari": -2,
        "Noakhali": -2,
        "Feni": -2,
        "Lakshmipur": -2,
        "Comilla": -1,
        "Brahmanbaria": -1,
        "Chandpur": -1,
        "Sylhet": -3,
        "Moulvibazar": -3,
        "Habiganj": -2,
        "Sunamganj": -3
    },
    "iftar_offsets": {
        "Dhaka": 0,
        "Gazipur": 0,
        "Narayanganj": 0,
        "Narsingdi": 0,
        "Munshiganj": 1,
        "Madaripur": 1,
        "Shariatpur": 1,
        "Rajbari": 2,
        "Faridpur": 2,
        "Gopalganj": 2,
        "Manikganj": 1,
        "Tangail": 1,
        "Kishoreganj": 1,
        "Barishal": 1,
        "Jhalokathi": 2,
        "Patuakhali": 2,
        "Barguna": 3,
        "Bhola": 2,
        "Pirojpur": 2,
        "Khulna": 3,
        "Bagerhat": 3,
        "Satkhira": 4,
        "Chuadanga": 4,
        "Kushtia": 4,
        "Jhenaidah": 5,
        "Magura": 5,
        "Narail": 5,
        "Jashore": 5,
        "Meherpur": 6,
        "Rajshahi": 7,
        "Chapainawabganj": 8,
        "Naogaon": 7,
        "Natore": 6,
        "Pabna": 5,
        "Sirajganj": 4,
        "Bogura": 4,
        "Joypurhat": 6,
        "Dinajpur": 8,
        "Rangpur": 8,
        "Thakurgaon": 9,
        "Panchagarh": 10,
        "Nilphamari": 8,
        "Lalmonirhat": 9,
        "Kurigram": 9,
        "Gaibandha": 7,
        "Mymensingh": 2,
        "Netrokona": 3,
        "Jamalpur": 3,
        "Sherpur": 4,
        "Chattogram": -3,
        "Cox's Bazar": -4,
        "Rangamati": -2,
        "Bandarban": -3,
        "Khagrachari": -2,
        "Noakhali": -2,
        "Feni": -2,
        "Lakshmipur": -2,
        "Comilla": -1,
        "Brahmanbaria": -1,
        "Chandpur": -1,
        "Sylhet": -3,
        "Moulvibazar": -3,
        "Habiganj": -2,
        "Sunamganj": -3
    }
}

const elements = {
    hrs: document.getElementById('hrs'),
    min: document.getElementById('min'),
    sec: document.getElementById('sec'),
    apm: document.getElementById('apm'),
    dd: document.getElementById('dd'),
    timezone: document.getElementById('timezone'),
    districtDropdown: document.getElementById('custom-district-dropdown'),
    dropdownTrigger: document.getElementById('dropdown-trigger'),
    selectedDistrictName: document.getElementById('selected-district-name'),
    dropdownOptions: document.getElementById('dropdown-options'),
    ramadanDayLabel: document.getElementById('ramadan-day-label'),
    suhoorTime: document.getElementById('suhoor-time'),
    iftarTime: document.getElementById('iftar-time'),
    countdownLabel: document.getElementById('countdown-label'),
    countdownTimer: document.getElementById('countdown-timer'),
    countdownContainer: document.getElementById('countdown-container')
};

const backgrounds = {
    night: "https://images.unsplash.com/photo-1534067783496-26e1c42d446a?auto=format&fit=crop&w=1920&q=80",
    sunrise: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
    morning: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80",
    noon: "https://images.unsplash.com/photo-1472214603828-b02e9882904e?auto=format&fit=crop&w=1920&q=80",
    afternoon: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=1920&q=80",
    evening: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80"
};

let currentBgType = null;
let lastUpdateDate = "";
let selectedDistrict = "Dhaka";
let lastNotifiedEvent = null;

function updateClock() {
    const now = new Date();
    const dateString = now.toDateString();

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    elements.dd.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(now);

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    elements.timezone.textContent = tz.replace(/_/g, ' ');

    let hours = now.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    elements.hrs.textContent = String(hours).padStart(2, '0');
    elements.min.textContent = String(now.getMinutes()).padStart(2, '0');
    elements.sec.textContent = String(now.getSeconds()).padStart(2, '0');
    elements.apm.textContent = period;

    updateBackground(now.getHours());

    if (lastUpdateDate !== dateString) {
        updateRamadanTimes();
        lastUpdateDate = dateString;
    }

    updateCountdown();
}

function playNotificationSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const playTone = (freq, startTime, duration) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(startTime);
            osc.stop(startTime + duration);
        };
        playTone(660, audioCtx.currentTime, 0.4);
        playTone(880, audioCtx.currentTime + 0.2, 0.5);
    } catch (e) {
        console.error("Audio failed:", e);
    }
}

function updateCountdown() {
    const now = new Date();
    const suhoorOffset = r_adjustments.suhoor_offsets[selectedDistrict];
    const iftarOffset = r_adjustments.iftar_offsets[selectedDistrict];

    const getDateObj = (dateStr, timeStr, offset) => {
        const [h, m] = timeStr.split(':').map(Number);
        const d = new Date(dateStr);
        d.setHours(h, m + offset, 0, 0);
        return d;
    };

    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const tomorrowStr = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;

    const todayData = r_times.ramadan.find(d => d.date === todayStr);
    const tomorrowData = r_times.ramadan.find(d => d.date === tomorrowStr);

    let nextEventTime = null;
    let label = "";

    if (todayData) {
        const suhoorToday = getDateObj(todayStr, todayData.suhoor, suhoorOffset);
        const iftarToday = getDateObj(todayStr, todayData.iftar, iftarOffset);

        if (now < suhoorToday) {
            nextEventTime = suhoorToday;
            label = "Suhoor ends in";
        } else if (now < iftarToday) {
            nextEventTime = iftarToday;
            label = "Iftar starts in";
        } else if (tomorrowData) {
            nextEventTime = getDateObj(tomorrowStr, tomorrowData.suhoor, suhoorOffset);
            label = "Next Suhoor in";
        }
    } else if (tomorrowData) {
        nextEventTime = getDateObj(tomorrowStr, tomorrowData.suhoor, suhoorOffset);
        label = "First Suhoor in";
    }

    if (nextEventTime) {
        const diff = nextEventTime - now;

        // Sound notification on transition
        const eventId = nextEventTime.getTime();
        if (lastNotifiedEvent && lastNotifiedEvent !== eventId) {
            playNotificationSound();
        }
        lastNotifiedEvent = eventId;

        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        elements.countdownLabel.textContent = label;
        elements.countdownTimer.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        elements.countdownContainer.style.display = 'flex';
    } else {
        elements.countdownContainer.style.display = 'none';
        lastNotifiedEvent = null;
    }
}

function updateBackground(hour) {
    let bgType = 'night';

    if (hour >= 5 && hour < 8) bgType = 'sunrise';
    else if (hour >= 8 && hour < 12) bgType = 'morning';
    else if (hour >= 12 && hour < 15) bgType = 'noon';
    else if (hour >= 15 && hour < 18) bgType = 'afternoon';
    else if (hour >= 18 && hour < 21) bgType = 'evening';
    else bgType = 'night';

    if (currentBgType !== bgType) {
        // Preload image for smoother transition
        const img = new Image();
        img.src = backgrounds[bgType];

        const setBg = () => {
            document.body.style.backgroundImage = `url("${backgrounds[bgType]}")`;
            currentBgType = bgType;
        };

        img.onload = setBg;
        img.onerror = setBg; // Fallback: set background anyway and let browser handle it
    }
}

// Ramadan Logic
function initRamadan() {
    // Load saved district
    selectedDistrict = localStorage.getItem('selectedDistrict') || 'Dhaka';
    elements.selectedDistrictName.textContent = selectedDistrict;

    // Populate Districts
    const districts = Object.keys(r_adjustments.suhoor_offsets).sort();
    districts.forEach(district => {
        const option = document.createElement('div');
        option.classList.add('dropdown-option');
        if (district === selectedDistrict) option.classList.add('selected');
        option.textContent = district;

        option.addEventListener('click', () => {
            selectDistrict(district);
        });

        elements.dropdownOptions.appendChild(option);
    });

    // Toggle Dropdown
    elements.dropdownTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.districtDropdown.classList.toggle('active');
    });

    // Close on outside click
    document.addEventListener('click', () => {
        elements.districtDropdown.classList.remove('active');
    });

    updateRamadanTimes();
}

function selectDistrict(district) {
    selectedDistrict = district;
    elements.selectedDistrictName.textContent = district;
    localStorage.setItem('selectedDistrict', district);

    // Update selected class in UI
    document.querySelectorAll('.dropdown-option').forEach(opt => {
        opt.classList.toggle('selected', opt.textContent === district);
    });

    elements.districtDropdown.classList.remove('active');
    updateRamadanTimes();
    updateCountdown();
}

function updateRamadanTimes() {
    const now = new Date();
    // Use local date string (YYYY-MM-DD) instead of ISO (UTC)
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    // Find today's Ramadan entry
    const todayData = r_times.ramadan.find(day => day.date === todayStr);

    if (todayData) {
        const suhoorOffset = r_adjustments.suhoor_offsets[selectedDistrict];
        const iftarOffset = r_adjustments.iftar_offsets[selectedDistrict];

        elements.ramadanDayLabel.textContent = `Ramadan Day ${todayData.day}`;
        elements.suhoorTime.textContent = applyOffset(todayData.suhoor, suhoorOffset);
        elements.iftarTime.textContent = applyOffset(todayData.iftar, iftarOffset);
    } else {
        elements.ramadanDayLabel.textContent = "Ramadan Over / Not Started";
        elements.suhoorTime.textContent = "--:--";
        elements.iftarTime.textContent = "--:--";
    }
}

function applyOffset(timeStr, offsetMinutes) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes + offsetMinutes, 0);

    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

// Initial calls
initRamadan();
updateClock();
setInterval(updateClock, 1000);

