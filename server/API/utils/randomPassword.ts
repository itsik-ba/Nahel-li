
  export const randomPasswordGenerator = () => {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const allCharacters = numbers + letters;
    
    let password = '';
    
    // הבטחת ספרה אחת לפחות
    password += numbers[Math.floor(Math.random() * numbers.length)];
    
    // הבטחת אות אחת לפחות
    password += letters[Math.floor(Math.random() * letters.length)];
    
    // מילוי שאר הסיסמא בתווים אקראיים
    for (let i = 2; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
    
    // ערבוב התווים לקבלת סיסמא יותר אקראית
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    return password;
  };
  
  