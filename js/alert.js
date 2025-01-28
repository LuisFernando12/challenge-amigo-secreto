const alertContainerCss = `
    padding-right: 1rem;
    padding-left: 1rem;
    min-width: 20%;
    max-width: 30%;
    height: 100px;
    background-color: var(--color-secondary);
    box-shadow: 0 0  1rem rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 100;
    border-radius: 1.5rem;
    top:2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: all 0.3s ease-in-out;
`
const alertContentCss = `
    margin-top: 1rem;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const messageCss = `
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    text-wrap: wrap;
`;
const buttonCss = `
    padding: 0;
    align-self: flex-end;
    width: 3rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border: solid 1px #000;
    background-color: var(--color-button);
    color: var(--color-white);
    font-size: small;
`;
const slideIn = [
    {
        transform: 'translateY(-150%)',
        easing: 'ease-in-out'
    },
    {
        transform: 'translateY(0)',

        easing: 'ease-in-out'
    }
];
const slideOut = [
    {
        transform: 'translateY(0)',
        easing: 'ease-in-out'
    },
    {
        transform: 'translateY(-150%)',
        easing: 'ease-in-out'
    }
];
const warnIcon = `
    <i class="material-symbols-outlined" style="color: orange;"> warning </i>
`;
const errorIcon = `
    <i class="material-symbols-outlined" style="color: red;"> cancel </i>
`;

export function Alert(message, erro = false) {
    const alertContainer = document.createElement('div');
    alertContainer.style.cssText = alertContainerCss;
    alertContainer.animate(slideIn, 500);
    const alertContent = document.createElement('div');
    alertContent.style.cssText = alertContentCss

    alertContent.innerHTML = erro ? errorIcon : warnIcon;

    const messageHtml = document.createElement('span');
    messageHtml.style.cssText = messageCss;
    messageHtml.innerText = message;

    alertContent.appendChild(messageHtml);

    const button = document.createElement('button');
    button.style.cssText = buttonCss;
    button.innerText = 'OK';

    button.onclick = (() => {
        setTimeout(() => {
            alertContainer.style.display = 'none';
            alertContainer.remove();
        }, 400)
        alertContainer.animate(slideOut, 600);
    });

    alertContainer.appendChild(alertContent);
    alertContainer.appendChild(button);
    document.body.appendChild(alertContainer);

}