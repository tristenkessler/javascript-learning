
// If hour is between 6am and 12pm: Good morning!
// If hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 13;

if (hour >= 6 && hour < 12) 
    console.log('Good morning!')
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon!')
else 
    console.log('Good evening!')

let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    
        case 'moderator':
            console.log('Moderator');
            break;
        
        default:
            console.log('Unknown User');

}

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');

