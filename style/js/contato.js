const contatoActions = () => {
    const mapUrl = 'https://google.com/maps?sca_esv=1e191da9c85b6632&output=search&q=SQS+304,+Bloco+D+comercial&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRdynpPJ66TDyFgZmq_XFwppazcD3UADNx6r4GDDz3huEP6NEVK7mtMs0kZ5nhpuJ_nutbMtOKTaG5mn_jo32y7qSHMGbJ_d15Ey67e-i0SN3ZtYR7bNDCAJcNG2g35rtPNVolYVN1-PZHZLFwEju8F0ousXVhamZ0qFKrRlA1rEzIsD_BTZIAaHgFfw0k6TAE22G0zw&entry=mc&ved=1t:200715&ictx=111';
    const actions = [
        {
            id: 'contatos-contato-telefone',
            handler: () => {
                window.location.href = 'tel:+5561912345678';
            }
        },
        {
            id: 'contatos-contato-email',
            handler: () => {
                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=contato@prismacursos.com.br', '_blank', 'noopener');
            }
        },
        {
            id: 'contatos-contato-instagram',
            handler: () => {
                window.open('https://www.instagram.com/_prismacursos/', '_blank', 'noopener');
            }
        },
        {
            id: 'contatos-contato-linkedin',
            handler: () => {
                window.open('https://www.linkedin.com/company/prisma-educacional-cursos/', '_blank', 'noopener');
            }
        },
        {
            id: 'contatos-contato-mapa',
            handler: () => {
                window.open(mapUrl, '_blank', 'noopener');
            }
        }
    ];

    actions.forEach(({ id, handler }) => {
        const row = document.getElementById(id);
        if (row) {
            row.style.cursor = 'pointer';
            row.addEventListener('click', handler);
            row.addEventListener('keypress', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handler();
                }
            });
            row.tabIndex = 0;
            row.setAttribute('role', 'button');
        }
    });
};

document.addEventListener('DOMContentLoaded', contatoActions);
