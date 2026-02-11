// Guest database with names, photos, and categories only
const guests = [
    {
        id: 1,
        name: "Mrs Benadette Okwusiuno",
        photo: "images/noimage.jpg",
        category: "Family",
        searchTerms: ["benadette", "okwusiuno"]
    },
    {
        id: 2,
        name: "Ifeoma Amaechi",
        photo: "images/ifymysister.jpg",
        category: "Family",
        searchTerms: ["ifeoma", "amaechi"]
    },
    {
        id: 3,
        name: "Ifeanyi Amaechi",
        photo: "images/bestman.jpg",
        category: "Family",
        searchTerms: ["ifeanyi", "amaechi"]
    },
    {
        id: 4,
        name: "Kaycee and Betty Amaechi",
        photo: "images/kezman.jpg",
        category: "Family",
        searchTerms: ["kaycee", "amaechi", "betty"]
    },
    {
        id: 5,
        name: "Mr and Mrs Robert Eneh",
        photo: "images/noimage.jpg",
        category: "Childhood Friend",
        searchTerms: ["robert", "eneh"]
    },
    {
        id: 6,
        name: "Mr and Mrs Akanne Chigozie",
        photo: "images/akanne.jpg",
        category: "Childhood Friend",
        searchTerms: ["akanne", "chigozie"]
    },
    {
        id: 7,
        name: "Okere Divine",
        photo: "images/noimage.jpg",
        category: "Family",
        searchTerms: ["okere", "divine"]
    },
    {
        id: 8,
        name: "Kingsley Ugochukwu",
        photo: "images/vuga.JPG",
        category: "Grooms Man",
        searchTerms: ["kingsley", "ugochukwu"]
    },
    {
        id: 9,
        name: "Mr and Mrs Stanley Akpan",
        photo: "images/stanley.jpg",
        category: "Grooms Man",
        searchTerms: ["stanley", "akpan", "joy"]
    },
    {
        id: 10,
        name: "Charles Dellons",
        photo: "images/mmm.jpg",
        category: "Friend of the Groom",
        searchTerms: ["charles", "dellons"]
    },
    {
        id: 11,
        name: "Michael Morah",
        photo: "images/morah.jpg",
        category: "Friend of the Groom",
        searchTerms: ["michael", "morah"]
    },
    {
        id: 12,
        name: "Ugochukwu Raymond",
        photo: "images/noimage.jpg",
        category: "Friend of the Groom",
        searchTerms: ["ugochukwu", "raymond"]
    },
    {
        id: 13,
        name: "Great Ahize",
        photo: "images/great.jpg",
        category: "Friend of the Groom",
        searchTerms: ["great", "ahize"]
    },
    {
        id: 14,
        name: "Mr. & Mrs. Godwin Amaechi",
        photo: "images/mummy.jpg",
        category: "Parents of the Groom",
        searchTerms: ["lina", "angelina", "godwin", "amaechi"]
    },
    {
        id: 15,
        name: "Nkem Ebubealor",
        photo: "images/nkemsiebbs.jpg",
        category: "Brides Maid",
        searchTerms: ["nkem", "ebubealor"]
    },
    {
        id: 16,
        name: "Chinedu Okenu",
        photo: "images/cyno.jpg",
        category: "Friend of the Groom",
        searchTerms: ["chinedu", "okenu"]
    },
    {
        id: 17,
        name: "Ifeanyi Nkem Frenzy",
        photo: "images/frenzy.jpg",
        category: "Bestman",
        searchTerms: ["ifeanyi", "frenzy"]
    },
    {
        id: 18,
        name: "Mr Victor",
        photo: "images/victor.jpg",
        category: "Friend of the Groom",
        searchTerms: ["victor",]
    },
    {
        id: 19,
        name: "Idris Spicey",
        photo: "images/spicy.JPG",
        category: "Grooms man",
        searchTerms: ["idris", "spicey"]
    },
    {
        id: 20,
        name: "Alex Ejindu",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["alex", "ejindu"]
    },
    {
        id: 21,
        name: "Mr and Mrs Samuel Usikhifo",
        photo: "images/sammy.jpg",
        category: "Grooms man",
        searchTerms: ["Samuel", "Usikhifo"]
    },
    {
        id: 22,
        name: "Onars Genesis",
        photo: "images/onars.jpg",
        category: "Grooms man",
        searchTerms: ["onars", "genesis"]
    },
    // New guests added below
    {
        id: 23,
        name: "Chinedu Obiejesi",
        photo: "images/chinedu.jpg",
        category: "Guest",
        searchTerms: ["chinedu", "obiejesi"]
    },
    {
        id: 24,
        name: "Alex Stephan",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["alex", "stephan"]
    },
    {
        id: 25,
        name: "Okechukwu smart",
        photo: "images/noimage.jpg",
        category: "Usher",
        searchTerms: ["okechukwu", "smart"]
    },
    {
        id: 26,
        name: "Justina Egbuikwe",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["justina", "egbuikwe"]
    },
    {
        id: 27,
        name: "Chief Chris Ekeocha",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["chris", "ekeocha", "chief"]
    },
    {
        id: 28,
        name: "Jude Offorka",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["jude", "offorka"]
    },
    {
        id: 29,
        name: "Cherry Toni",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["cherry", "toni"]
    },
    {
        id: 30,
        name: "Nanya Okonta",
        photo: "images/nanya.JPG",
        category: "Guest",
        searchTerms: ["nanya", "okonta"]
    },
    {
        id: 31,
        name: "Adedoyinsola Sogbein",
        photo: "images/adedoyin.JPG",
        category: "Guest",
        searchTerms: ["adedoyinsola", "sogbein"]
    },
    {
        id: 32,
        name: "Wale Abdullahi",
        photo: "images/wale.JPG",
        category: "Guest",
        searchTerms: ["wale", "abdullahi"]
    },
    {
        id: 33,
        name: "Chief Chinyere Okpe",
        photo: "images/chinyere.JPG",
        category: "Family",
        searchTerms: ["chinyere", "okpe"]
    },
    {
        id: 34,
        name: "Harmony Ehirim",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["harmony", "ehirim"]
    },
    {
        id: 35,
        name: "Rodiat Olagunju",
        photo: "images/rodiat.JPG",
        category: "Guest",
        searchTerms: ["rodiat", "olagunju"]
    },
    {
        id: 36,
        name: "Taiwo Emekariabor",
        photo: "images/taiwo.JPG",
        category: "Guest",
        searchTerms: ["taiwo", "emekariabor"]
    },
    {
        id: 37,
        name: "Ijie Osose David",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["ijie", "osose", "david"]
    },
    {
        id: 38,
        name: "Regina Richards",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["regina", "richards"]
    },
    {
        id: 39,
        name: "Mr and Mrs Onwuka",
        photo: "images/onwuka.JPG",
        category: "Friends of the Bride",
        searchTerms: ["onwuka"]
    },
    {
        id: 40,
        name: "Hannah Adeoye",
        photo: "images/hannah.JPG",
        category: "Guest",
        searchTerms: ["hannah", "adeoye"]
    },
    {
        id: 41,
        name: "Uche Amaechi",
        photo: "images/uche.JPG",
        category: "Guest",
        searchTerms: ["uche", "amaechi"]
    },
    {
        id: 42,
        name: "Oshun Afeez Ademola",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["oshun", "afeez", "ademola"]
    },
    {
        id: 43,
        name: "Racheal Edoh",
        photo: "images/racheal.JPG",
        category: "Guest",
        searchTerms: ["racheal", "edoh"]
    },
    {
        id: 44,
        name: "Emeka Joseph",
        photo: "images/emeka.JPG",
        category: "Guest",
        searchTerms: ["emeka", "joseph"]
    },
    {
        id: 45,
        name: "Mulero Elizabeth Kehinde",
        photo: "images/mulero.JPG",
        category: "Guest",
        searchTerms: ["mulero", "elizabeth", "kehinde"]
    },
    {
        id: 46,
        name: "Temitope Agbetoke",
        photo: "images/temitope.JPG",
        category: "Guest",
        searchTerms: ["temitope", "agbetoke"]
    },
    {
        id: 47,
        name: "Chizaram Cynthia",
        photo: "images/chizaram.JPG",
        category: "Guest",
        searchTerms: ["chizaram", "cynthia"]
    },
    {
        id: 48,
        name: "Gbolahan Adetoro",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["gbolahan", "adetoro"]
    },
    {
        id: 49,
        name: "Jamiu Jimoh",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["jamiu", "jimoh"]
    },
    {
        id: 50,
        name: "Christian Ikwuagwu",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["christian", "ikwuagwu"]
    },
    {
        id: 51,
        name: "Innocent Kaduna Jonathan",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["innocent", "kaduna", "jonathan"]
    },
    {
        id: 52,
        name: "Olakeji Ajayi",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["olakeji", "ajayi"]
    },
    {
        id: 53,
        name: "Odaranle Kemi",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["odaranle", "kemi"]
    },
    {
        id: 54,
        name: "Ostrava Dagi",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["ostrava", "dagi"]
    },
    {
        id: 55,
        name: "Patrick Ozozinah",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["patrick", "ozozinah"]
    },
    {
        id: 56,
        name: "Mr and Mrs Kennedy Nkemjika",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["kennedy", "nkemjika"]
    },
    {
        id: 57,
        name: "Emmanuel Ezekoli",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["emmanuel", "ezekoli"]
    },
    {
        id: 58,
        name: "Olabisi Yusuf",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["olabisi", "yusuf"]
    },
    {
        id: 59,
        name: "Oluwaseun Essien",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["oluwaseun", "essien"]
    },
    {
        id: 60,
        name: "Ayo Godwin",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["ayo", "godwin"]
    },
    {
        id: 61,
        name: "Ayomide Alamutu",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["ayomide", "alamutu"]
    },
    {
        id: 62,
        name: "Florence Titcombe",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["florence", "titcombe"]
    },
    {
        id: 63,
        name: "Joan Obidike",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["joan", "obidike"]
    },
    {
        id: 64,
        name: "Adedeji",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["adedeji"]
    },
    {
        id: 65,
        name: "Ezeanyika Ebube",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["ezeanyika", "ebube"]
    },
    {
        id: 66,
        name: "Mr and Mrs Jacob Emekariabor",
        photo: "images/taiwo.JPG",
        category: "Guest",
        searchTerms: ["jacob", "emekariabor"]
    },
    {
        id: 67,
        name: "Oyebanji Dada",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["oyebanji", "dada"]
    },
    {
        id: 68,
        name: "Chukwuma Ezeobika",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["chukwuma", "ezeobika"]
    },
    {
        id: 69,
        name: "Pastor and Mrs Awolabi",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["pastor", "awolabi"]
    },
    {
        id: 70,
        name: "Eunice",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["eunice"]
    },
    {
        id: 71,
        name: "Uncle Goddy",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["uncle", "goddy"]
    },
    {
        id: 72,
        name: "Saliba Anthony",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["saliba", "anthony"]
    },
    {
        id: 73,
        name: "Adeyemi",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["adeyemi"]
    },
    {
        id: 74,
        name: "Nick Okoro",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["nick", "okoro"]
    },
    {
        id: 75,
        name: "Igene Ugorji",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["igene", "ugorji"]
    },
    {
        id: 76,
        name: "Wisdom Ugorji",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["wisdom", "ugorji"]
    },
    {
        id: 77,
        name: "Big Abbey",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["big", "abbey"]
    },
    {
        id: 78,
        name: "Rosco",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["rosco"]
    },
    {
        id: 79,
        name: "Simon",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["simon"]
    },
    {
        id: 80,
        name: "Ayinde 4plug",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["ayinde", "4plug"]
    },
    {
        id: 81,
        name: "Alao Babatunde",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["Alao", "babatunde"]
    },
    {
        id: 82,
        name: "Funmi",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["funmi",]
    },
    {
        id: 83,
        name: "Mr and Mrs Tomilola",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["tomi", "tomilola"]
    },
    {
        id: 84,
        name: "Jennifer Okolie",
        photo: "images/noimage.jpg",
        category: "Guest",
        searchTerms: ["jennifer", "okolie"]
    },
    {
        id: 85,
        name: "Daniel Onuoha",
        photo: "images/noimage.jpg",
        category: "MC",
        searchTerms: ["Daniel", "Onuoha"]
    }
    
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const guestInfo = document.getElementById('guestInfo');
const notFound = document.getElementById('notFound');
const tryAgainBtn = document.getElementById('tryAgainBtn');

// Guest info elements
const guestName = document.getElementById('guestName');
const guestImage = document.getElementById('guestImage');
const guestCategory = document.getElementById('guestCategory');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Clear button visibility
    searchInput.addEventListener('input', function() {
        clearBtn.classList.toggle('show', this.value.length > 0);
        if (this.value.length === 0) {
            hideAllResults();
        }
    });

    // Clear button functionality
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        clearBtn.classList.remove('show');
        hideAllResults();
        searchInput.focus();
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        if (searchTerm.length < 2) {
            hideAllResults();
            return;
        }
        
        const foundGuest = guests.find(guest => 
            guest.name.toLowerCase().includes(searchTerm) ||
            guest.searchTerms.some(term => term.includes(searchTerm))
        );
        
        if (foundGuest) {
            displayGuestInfo(foundGuest);
        } else {
            showNotFound();
        }
    });

    // Try again button
    tryAgainBtn.addEventListener('click', function() {
        notFound.classList.add('hidden');
        searchInput.value = '';
        searchInput.focus();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            hideAllResults();
            searchInput.focus();
        }
        if (e.key === 'Enter' && searchInput.value.trim().length > 0) {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const foundGuest = guests.find(guest => 
                guest.name.toLowerCase().includes(searchTerm) ||
                guest.searchTerms.some(term => term.includes(searchTerm))
            );
            
            if (foundGuest) {
                displayGuestInfo(foundGuest);
            } else {
                showNotFound();
            }
        }
    });

    // Google Maps functionality
    // Copy Address Functionality
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    const venueAddress = "Work and Play, 44 Community Road, Off Allen Avenue, Ikeja, Lagos, Nigeria";
    
    copyAddressBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(venueAddress).then(() => {
            showToast('Address copied to clipboard!');
            
            // Visual feedback
            const originalText = copyAddressBtn.innerHTML;
            copyAddressBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Copied!
            `;
            copyAddressBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            
            setTimeout(() => {
                copyAddressBtn.innerHTML = originalText;
                copyAddressBtn.style.background = 'linear-gradient(45deg, #6b5b95, #8a7fba)';
            }, 2000);
            
        }).catch(err => {
            console.error('Failed to copy address: ', err);
            showToast('Failed to copy address');
        });
    });
    
    // Enhanced toast notification
    function showToast(message) {
        // Remove existing toast if any
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            ${message}
        `;
        document.body.appendChild(toast);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(10px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 3000);
    }

    // Add floating hearts animation
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts';
    document.body.appendChild(heartsContainer);
    
    const heartStyles = document.createElement('style');
    heartStyles.textContent = `
        .floating-hearts {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
        
        .floating-heart {
            position: absolute;
            color: rgba(255, 182, 193, 0.3);
            font-size: 20px;
            animation: floatHeart 15s linear infinite;
        }
        
        @keyframes floatHeart {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(heartStyles);
    
    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDelay = `${Math.random() * 15}s`;
            heart.style.fontSize = `${Math.random() * 15 + 15}px`;
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 16000);
        }, i * 800);
    }
    
    // Set focus on search input
    setTimeout(() => {
        searchInput.focus();
    }, 500);
});

// Display guest information
function displayGuestInfo(guest) {
    guestName.textContent = guest.name;
    guestImage.src = guest.photo;
    guestImage.alt = `Photo of ${guest.name}`;
    guestCategory.textContent = guest.category;
    
    // Show guest info, hide not found
    guestInfo.classList.remove('hidden');
    notFound.classList.add('hidden');
    
    // Add special styling for VIP categories
    if (guest.category === 'Parents of the Groom' || guest.category === 'Family' || guest.category === 'Bestman') {
        guestCategory.style.color = '#FFD700';
        guestCategory.style.background = 'rgba(255, 215, 0, 0.1)';
    } else {
        guestCategory.style.color = '';
        guestCategory.style.background = '';
    }
}

// Show not found message
function showNotFound() {
    guestInfo.classList.add('hidden');
    notFound.classList.remove('hidden');
}

// Hide all results
function hideAllResults() {
    guestInfo.classList.add('hidden');
    notFound.classList.add('hidden');
}