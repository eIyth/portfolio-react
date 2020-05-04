import React from 'react';
import SkillCards from './skillsCard.js'

class Skills extends React.Component{
    render() {
      return(
        <div className="flex p-0 w-screen items-center justify-center">
        <div className="overflow-hidden container">
            <div className="px-6 py-4">
                <div className="text-4xl font-light text-center">Skills</div>
                <div className=" mx-auto w-24 border-t-4 mb-10 border-indigo-400 border-collapse "></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <SkillCards 
                      name="Web Design" 
                      text="(HTML, CSS, JavaScript)"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEpElEQVQ4y3WVC0yTVxTHC0KMYEAC5Q3lOZBlkklg2TKShfAaCo4tIVHcMopOxvtVaKm8wkABgYKgNYKI21gGC4hS2AQR6QbWYaigUFTAbICgEgiPTWh7z879eKyYcJKb+93vu/f33fM/59zLYm2YhYUFy9LSUps+Y/+JtbV1LGsHw29fWFlZHaPP2GvTtdtsA8by9PRixv7+AbtMTEwkRkb74nH4Hp2CzRzb/t27dx9ns9ldOJ+OWbq6Olq019HZtQ6jINqo6evr69De2Nj4A09PT8jOzoXa2u8hKyt3OTMze1EsriYlJWXg7e0NOOconXvwoAezxsXFhdkY46az8zusvXvXYWh6QUGHRgaHFCAQCFcHh0Zh6NFTbE9g9MlzyMrOXevt6wc+Xzi56aGzs7MOerQlmabpubm5dT8efgYjigmlk5MjfB3BJbhTIhRmkoSEJGJra0MkkltqQIuKiu7ENZxtBKT6Ozo67jEzM/swOCREoVBMwPSLeeXJk9/AtWv1pLS0nMzNLcP8wr9QXV1Lrlypg1OnokhH5131y1eLEB7+5SwG5rMDB9x1keVDI8ZFkds8PDyg/8EgoIvKmpqr8GJmnsjlwwTdoTuBlNQ0cHCwh9bW38jM7AJwI0+AVCpbGxufBF9fX6qp1MbGJoHZJUbuKxqAzMycNXt7O7hw4RKRPxwhfIEQ8vLyof6nRui6I4WMjNMgyBDC7S4paWvrIFSSmJi4VZGoAszNzXI1PXeqrBKrRkefA5cbSSiQTqaAAfljSE8XQGoqD3qk96Cy8iKgjlBUVALx8QnkTvcfKoQDMnw1gWxeGv+1YnQCUHz14tIaxMUlQENjM400UDlcXV0hMTEJGhqaIDYuHv6efAmFReeITDYAovIqFc2g7UAe/xUFIkC9tKyE5ORUaGvvAL4gA9zd3YFqSX/SKrkFKSk8BnjmbBGR3ZeDSFSlRMb7mkCH8ooq5dNnf0F0dAyprrnKuJyWxgfZ/QEGEBefgDr+DmVlFYzLItF5wktLJz1SmerGzXbqso8mMKygoBBycvLWOLa2QCvibk8fEaCGZaLz8GN9A3Te7oH8grNYNTnQ1HSTtLS0bQVFfKkaMFP4m4UeZmpq+quXlxf0YQX09vYzOTg+PkX6+wcJjXpMTCxWRgZwOLbQ+Mt1Mr/whqAngFDViGIMAgICKfAesiJpYoeam1uwEfrpsfDjU1PTc5iPj5QREVxcICHF50oZvaamX8NF8WXyc0MToT9oudGuXFpWoUSxS+hVxD40TPAjb5ceGyP6gAIwyZX29vZYFd+S7/LPkJzcPDWPl07ou+brEtXyigoOHT5M69nt7dLTxrLTwkzX3XhlFBwcMjEzO4/6Vbzp7u5V0wOCtj9RgqTklFX5w2Ea8RWc+y5dYGdnp2tgYKBFz0bmyMGUYEiGhgYMFE8en8DAQKir+wHzrhmKi0v/KSwsWaEVIxZfBj8/P0DICSY9HByYNUFBQVvHIPPA4XBYrq7ru1coxrRQkg49vT2ncei94dZ+bB/hT6PxqOpFj0zXN2GoFRr6+f+wHa6Aj7HQE3e6AvDbUXQvbPMK0IT9B2SKdvgmotjPAAAAAElFTkSuQmCC"
                      />
                <SkillCards 
                      name="Frontend Javascript Frameworks" 
                      text="(React, Vuejs)"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD4klEQVQ4y3WUXWgUVxTHz+wSLeqDVbAgITVfmhDd+Ugs2taXgiW1bYTSWhrpQ6EtlDal+GB9KeZF/ChiXyyiIC2hFrQoFktb0WoyJht0NaFK6Lof2W3iJrsxapoYdGfmnv7vnd11fHDgMHc+7u/+zzn/e4lwpcikJBmhJJlhClwJMpemyXj3tmb9HtWMC70U6bxC+vLgP30UCfeRHrJJ91+kyAh+l/CFiNcRx7BIbpLaeJwMvk7rOKZZbFOkgMk/It4EaFFwLt5pAZCxHpADiPgYWVwAKIt7kta6o9Wb3Wv1W9xeanajmslDZPJVLAJACnEI8XIFBkA1YjCDnwpKjcV49hBOKtzmxWmVmPmuR+SOnxZ/UY2ww5aHNB0A3EFAJXyAdAn/G4obUDuzRsLSCECKJZhIaaZIUkSkF28Qbi7PxZlZji7fJHqpRdiaIQAQAHgoQRFjjgKOhQypcBEim32iDCBDQB3fpgbOf7yby1dqx36+RLUMlXJyBSoV4n4H8YIEhhBX7/hAV6nz1aJ+Oj8aGmHPddmbm+f5RIbtKglbJ1Msh1uq5wiiqlzHs3lqZVU3CQy3coJWc679M6Vs6uAPPN59WI1H3tsBlXVQaUqVMtwYFgfMDlrlyDQaUqoh6mcB2MRzv/UqSMbcxjfq3lDjB30xRreDCp3rPvDnChA1+2bKBzqpkCUkbMzYpgDz5/v5H9TtMq3kwsk/1LvhVz7EcyPbIVPIjt/wgfuDCj/KIWWAXaQrZDNmjp5Sk2dP/cn5T7o58Wk3T/acVe/yJ84h7QYJVAqHSBpe/yKg0Nz8r2yKZnlJ2CLzYjt7s3P8rMt79JhjTR1IvUnYIaOkMLI1mHKz6qyySr2Y3v29mvhfz6880fElT3Tu4njn13xraxfnjp5U38a+PS4tJI0u+v1abgymvAJGvpdG19JLNgpnfFJgjsjWbsECNRynNZjQyBepmgdXvsae44ji9H0xsOxVGLuFYfQZ1LIxqHAxajeagVUKn+8pSgVzZy6i080iXbWeE7DRAGxiV7XKZoj8T+eUyvTOg9gl9dLoU7amLy3Xz1epWcfuyv2sv88Tb3c5mZp21HOtrCu6bsi05K5AtEiV3q2OLucm7DTsm/qX0mnjn4WV1EPWO7DMzUn4LIv0UQYY3ZBA7lfbS203px8LxZDNZVodR7ofBI6vSsqUrX1Ljae+2hdOLXypC8py0pujUA0gILo8YdTpAsjdKwvadg5t2P5cBaYZlYZUUgc4HLDS83jei+8PJ+DRYVJbreiff5EVAVXhsrKnFD4LjKOtLk7GiSjppy9RpPnJ0f80CIuo8f8FeMh2Y66DIgAAAABJRU5ErkJggg=="
                      />

                <SkillCards 
                      name="Backend Javascript Frameworks" 
                      text="(Java, Android Studio, XML)"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACrklEQVQ4y32UTUhUURSA38w4amAxuAiqrQRtNCgIq0XclyblImZsZhZFBZGLVlNBiVRUJm2KisDVGyVKkTYZWRC2KI0i+iGhNoUalSVFfzsjsO+8OXe4vqQHH++cc+899/zcez2PL130vQzIxz8GCU8/5B3wE2Zhr7WnAz8hc0uyKa93HQkVjqPV8Cg30DzHhj3pormQ62+ewzaOvt6ZV+H6sELcmVDL7kHuWrj4CbuvdcYacDaaH9giY4PIy5yxeDlFx3gQ/sAXyDv2RKQM6UzRTLf1+eL4mM2s7EvTe9PWt1kmnIZkaA/8eDrExGVy2qZUWpOEzkxv6PQD8za6g0/hNQuXepEPm5tBJXp1ZLwW+zN46zbjHbsfVb1a/0fgjMpN8By+E8k3WUz07XazTGAKrP+MvcrT1CZQuvUIJdXJCIzBCk3rHuyjdvulIbuGtomtXeeego+2VGKYZOcuWxv934Qb0JofDLu6zk0VvZc1F0tBmOPo0+iVZYewkMMRIk7B+6wco8B/he02+nmcbLJdlU7jDIfmX4cYrUOJbkzLUINcgH54DF816svWYSlC878IzS3kITiAfCXafew9csy0Bx3on9yUJ/DeHUl5WKPcs3u4VaI5AfV0tJ5/o5xb0h7XLmsNyU6PzRR0qKNFTg3vq9wFv0Ecz+oFkGPUoOOHcEaEpspG+BJekFrKObDXsY06KS7Ru9wIdY59MTyUs+zUw2zAMKMRdILoPyRKtwwL1LGgd/8XtMx7HCR/5JMyKClRnxkiWVW+t9p91bfSiMns1SaOkjmHXhN9HOKR1NbActguDXDG6sjmjh6Zu7DSfZGiD2yMXRNODVPYHsijinwJ+Wy29EZOMa8l8rTF5j2w4RMe+HKFSl13HRfNTrkFYU0D/7D7oNrM7HrS9/4CAbfF3hL+W+oAAAAASUVORK5CYII="
                      />
                <SkillCards 
                      name="Backend Programming Languages" 
                      text="(PHP, Python)"
                      image="https://img.icons8.com/color/48/000000/python.png"
                      />
                <SkillCards 
                      name="Object-oriented Programming Languages" 
                      text="(Java, C++, Qt)"
                      image="https://img.icons8.com/ios/50/000000/qt.png"
                      />
                <SkillCards 
                      name="Database Management" 
                      text="(PostgreSQL, MySQL)"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADj0lEQVQ4y3WV208UZxjGp0lj0ps2OvauF72a+C940USoxF1A5bCLB+KeKo1FENgTS5fd2WEXMZpU01qTpkljG00BofHQklYLCBgNmniBpiDWNqlp0pq0F2XmosB+r8/7zQxOzXaT337f977P83yHTUDJDf/0iuJ8shcXNueGFxvzI0un8qNLN8CT/OijFSAcTPAr6pPQnM6NLAazFx+86fo3svrO338NghMQPyte+Y2GJv6k0tWnZHzzC+ljj0m/tGyDOde4NzTxhxzh+QveM9kLC6+7wQqK3528/jcVxp+wcR3rVcBj2XM6l7LTW2VtYexnYi/W07mri68qvefmt+aHl9awu3CErpE8o5eXN1iHt4xTrmY+u7dN6ei6vCX90W1TH3lE+vhjIbm0XCnoPzhPYOtHlyl95s5KV2ZCU+KlKTVemLRSQ7OUOXtXZM8vUO7rRcdgvxtMNjwfs98TPx6xNvPpPZE6MUfIMOMDk5rSU7ihxgemrGTxJhdF3JiixPEZSp2co/TpO9T78TxvJOE511KnbkkNfNKTYG9xyuwxftQULFRgJUqyiOa0LTQmWVwZ7kEjtcVpwV5kmFhrSkNrr9reN26lh25zUcgwl+L/4NGwh70d2cvmvtigpuzZH1eDUcNqS3xF3foPIlmaoeTgHCVLs8TzBFO8aYOTyD73Bmfl2F24Lt5PXqCWaNFsOJjWlJbogBoI61YglKN9sZIItX9CbfEvqT0zRp391+hYfoK69O9tMO/s/5ZwI+IDhI6ehWdQsDcQzpvBiKEpwUhBBRaCUdRF86F+ag4xLNKJ6y2xEm9Gjkb2pAZaBImWqEHIQGCBr5ySJ3QDUSQvHOClQl8GYjT3HsCVt+9oUn1NR61gRJ4GgUbFoMrBhuMpkL+503yn5oCmVNdF1SpfyKrZ3UZ1wW7R2Nr3whA17Ct7CEZfbNjY+iHVB3sEe5FhVtdGNKXKH96CCS9oh++QwCh21r9Hu/YeIX9TB9UGjlFdoEvCc67tajhCO+sPE2ttT5jnKzIQX1sRusZNUMacgMCOUgzoJWRPavwyqOz4/gXb5J8vFKZ9jR9wk1lzWHfFzmbCs1736MiHE2OcR+AmGVhVG3mj2h8+h+I/NXvaSIJ34au/WxdzN5JzrtXsPkyurtofsdD7gm9qn84f3vgXgOJbeI8Qxs/BDHiA/lN5Ir882e/gIZhzQmLg7Q0/sp4D1GGE8k+ROacAAAAASUVORK5CYII="
                      />

                <SkillCards 
                      name="Cross Platform App Developement" 
                      text="(Dart, Flutter, Cordova)"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACYUlEQVQ4y62UzWsTQRjG3zQtVZuKCiGC/0XFqweR3ST142S1IHjxr/CgXsSbFy8KNhEUe7EHbVNI0Fbobj8s2vagRfDg2YO0B5PN7G5en3f2o1mzNVYMPHlnZmd++8z7zizRPj/TdsmwVNhWg+HYGWjHXPEZ0YfYtFzfsJU3vsXSvpUKMwAzI5gVw8ag3dI6C8zTMFvD/PFNDbvdF2bsORvD+E4Ic2OYFcPuhvMzfZ0ZSWe9MDtwJjCAM31hkTMjHXZHz7MAs7tgIO8H2z0ITAqpYbD7X2AaGMGiAvyzs0QxoqNhoQDWwXLWC7MTsKCa1h9hQ2gPImYRIZU1rCCa0bEB4HTkLIIZKbC/+gFwFvqRgOE6mSkwtE/gRQ/xrIr4BP0ptCH3EXY6A4c35Z7OX/ysYa0YZvfCzlnuCPrLMre8wSzPRaUPzJe/ynq1jXWnBHgYWpTLDVg7DfZ4u5MTWHlLj7eRChfyoGb5o6xTNnSo68uihqF3ApUJcLuXs5fN0ZON9moJLynarjKCYglEyYsRV6FcyMkGf0FnCHlYgvX7EetY3Tk6UHPWaIE5X3eUgIq/w2w1ElY/2310BiReWmmj7Pf02PG6k8vUnHVaZKaao2jO4XyjLbnyLuj0qLXispeA6euLvFH86XnR1O3heScP2Aa9BWyupQBk9Dv0uukVlpCS97xw4wsf0SY2ORtCg1uHrcZf5kLD0U4ztVYBjj51A2n2Z4fesEfPvjNdfz4Tb+/8g2DNtadEE1MpB7MWQZ1REpey5dmmAoyp8s2nyapLk9NMV6uv4jUTFb2GrlToFxy36Rd3U+hgAAAAAElFTkSuQmCC"
                      />
                <SkillCards 
                      name="Continuous Development" 
                      text="(Git, Netlify)"
                      image="https://img.icons8.com/color/48/000000/git.png"
                      />
                      </div>
                </div>
            </div>
        </div>
      );
    }
  };

export default Skills;