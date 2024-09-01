
const contactForm=document.querySelector("#contactForm");
const TOKEN="7541246035:AAHQxrOQSEG3krXuW7-iqnrQcrBfW3jXmfw";
const chatId="-1002239925082";
const TG_BOT_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

contactForm.addEventListener("submit", sendData);

async function sendData(e){
    e.preventDefault();

    const name=e.target.name.value;
    const lastName=e.target.lastName.value;
    const phone=e.target.phone.value;

    const message=`**Нове замовлення**\n\n
                    **Ім'я**: ${name}\n
                    **Прізвище**: ${lastName}\n
                    **Номер телефону**: ${phone}\n`;

   
    try{
        await axios.post(TG_BOT_URL, {
            chat_id: chatId,
            parse_mode: 'Markdown',
            text: message
        })
        alert("Контактні дані надіслано!");
    }catch(err){
        console.error(err);
        alert("Сталася помилка, спробуйте ще раз!!!");
    }

    contactForm.reset();
}
