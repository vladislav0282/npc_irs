import React from "react";
import classes from "./Plannings.module.css";

const Plannings = (props) => {
  return (
    <div className={classes.conteiner}>
      <div>
        <h3>Ведение возможностей поставок</h3>
      </div>
      <div className={classes.conteiner_content}>
        
        <div className={classes.conteiner_content1}>
          <div>
            <div>
                    <h5>Субъект РФ</h5>
                    <input type="text" />
                    <button type="submit">Найти</button>
            </div>
            <div>
                <h5>Список субъектов РФ (ФОИВ)</h5>
                    <select name = "Список субъектов РФ (ФОИВ)">  
                    <optgroup label = "Субъекты РФ" >
                    <option value="Адыгея">Республика Адыгея</option>
                      <option value="Алтай">Республика Алтай </option>
                      <option value="Башкортостан">Республика Башкортостан </option>
                      <option value="Бурятия">Республика Бурятия </option>
                      <option value="Дагестан">Республика Дагестан </option>
                      <option value="Ингушетия">Республика Ингушетия </option>
                      <option value="Кабардино-Балкария">Кабардино-Балкарская Республика</option>
                      <option value="Калмыкия">Республика Калмыкия </option>
                      <option value="Карачаево-Черкессия">Карачаево-Черкесская Республика</option>
                      <option value="Карелия">Республика Карелия </option>
                      <option value="Коми">Республика Коми </option>
                      <option value="Марий Эл">Республика Марий Эл </option>
                      <option value="Мордовия">Республика Мордовия</option>
                      <option value="Саха (Якутия)">Республика Саха (Якутия) </option>
                      <option value="Северная Осетия - Алания">Республика Северная Осетия - Алания </option>
                      <option value="Татарстан">Республика Татарстан</option>
                      <option value="Тыва">Республика Тыва </option>
                      <option value="Удмуртская">Удмуртская Республика </option>
                      <option value="Хакасия">Республика Хакасия </option>
                      <option value="Чеченская">Чеченская Республика</option>
                      <option value="Чувашская Республика">Чувашская Республика</option>
                      <option value="Алтайский край">Алтайский край</option>
                      <option value="Забайкальский край">Забайкальский край</option>
                      <option value="Камчатский край">Камчатский край</option>
                      <option value="Краснодарский край">Краснодарский край</option>
                      <option value="Красноярский край">Красноярский край</option>
                      <option value="Пермский край">Пермский край</option>
                      <option value="Приморский край">Приморский край</option>
                      <option value="Ставропольский край">Ставропольский край</option>
                      <option value="Хабаровский край">Хабаровский край</option>
                      <option value="Амурская область">Амурская область</option>
                      <option value="Архангельская область">Архангельская область</option>
                      <option value="Астраханская область">Астраханская область</option>
                      <option value="Белгородская область">Белгородская область</option>
                      <option value="Брянская область">Брянская область </option>
                      <option value="Владимирская область">Владимирская область </option>
                      <option value="Волгоградская область">Волгоградская область </option>
                      <option value="Вологодская область">Вологодская область </option>
                      <option value="Воронежская область">Воронежская область </option>
                      <option value="Ивановская область">Ивановская область </option>
                      <option value="Иркутская область">Иркутская область </option>
                      <option value="Калининградская область">Калининградская область</option>
                      <option value="Калужская область">Калужская область </option>
                      <option value="Кемеровская область">Кемеровская область </option>
                      <option value="Кировская область">Кировская область </option>
                      <option value="Костромская область">Костромская область </option>
                      <option value="Курганская область">Курганская область </option>
                      <option value="Курская область">Курская область </option>
                      <option value="Ленинградская область">Ленинградская область </option>
                      <option value="Липецкая область">Липецкая область </option>
                      <option value="Магаданская область">Магаданская область</option>
                      <option value="Московская область">Московская область </option>
                      <option value="Мурманская область">Мурманская область </option>
                      <option value="Нижегородская область">Нижегородская область </option>
                      <option value="Новгородская область">Новгородская область </option>
                      <option value="Новосибирская область">Новосибирская область </option>
                      <option value="Омская область">Омская область</option>
                      <option value="Оренбургская область">Оренбургская область </option>
                      <option value="Орловская область">Орловская область </option>
                      <option value="Пензенская область">Пензенская область </option>
                      <option value="Псковская область">Псковская область </option>
                      <option value="Ростовская область">Ростовская область </option>
                      <option value="Рязанская область">Рязанская область </option>
                      <option value="Самарская область">Самарская область </option>
                      <option value="Саратовская область">Саратовская область </option>
                      <option value="Сахалинская область">Сахалинская область </option>
                      <option value="Свердловская область">Свердловская область </option>
                      <option value="Смоленская область">Смоленская область </option>
                      <option value="Тамбовская область">Тамбовская область </option>
                      <option value="Тверская область">Тверская область </option>
                      <option value="Томская область">Томская область </option>
                      <option value="Тульская область">Тульская область</option>
                      <option value="Тюменская область">Тюменская область </option>
                      <option value="Ульяновская область">Ульяновская область </option>
                      <option value="Челябинская область">Челябинская область </option>
                      <option value="Ярославская область">Ярославская область</option>
                      <option value="Москва">Москва</option>
                      <option value="Санкт-Петербург">Санкт-Петербург</option>
                      <option value="Еврейская АО">Еврейская АО</option>
                      <option value="Ненецкий АО">Ненецкий АО</option>
                      <option value="Ханты-Мансийский АО">Ханты-Мансийский АО</option>
                      <option value="Чукотский АО">Чукотский АО</option>
                      <option value="Ямало-Ненецкий АО">Ямало-Ненецкий АО</option>
                    </optgroup>
                    <optgroup label = "ФОИВ">
                      <option>МИД России</option>
                      <option>ФСБ России</option>
                      <option>ФСБ России</option>
                    </optgroup>	
                    </select>

            </div>

                  
            

          </div>
        </div>
        
        <div className={classes.conteiner_content2}>
          <div>
              <form className={classes.conteiner_content2_form} 
              action="#">
                    <button type="submit">Добавить</button>
                    <button type="submit">Изменить</button>
                    <button type="submit">Сохранить</button>
                    <button type="submit">Загрузить</button>  
                    <button type="submit">Печать</button>
                    <input type="text" />
                    <button type="submit">Найти</button>
              </form>
              <div className={classes.table}>
              <table  border="1" cellpadding="4" cellspacing="0">
                <tr>
                   <th colspan="3">Организация исполнитель</th>
                   <th colspan="2">Плазма свежезаморож</th>
                   <th colspan="2">Эритропитарная масса</th>
                   <th colspan="2">Имуноглобулин человека</th>
                   <th colspan="2">Альбумин 10-процентный</th>
                </tr>
                <tr>
                  <th>Наименование</th>
                  <th>Местонахожднение</th>
                  <th>ИНН</th>
                  <th>Макс.об.(тыс. литров)</th>
                  <th>Цена(тыс. руб. за один литр)</th>
                  <th>Макс. об. (тыс. литров)</th>
                  <th>Цена (тыс. руб. за один литр)</th>
                  <th>Макс. об. (тыс. литров)</th>
                  <th>Цена (тыс. руб. за один литр)</th>
                  <th>Макс.об. (тыс. литров)</th>
                  <th>Цена (тыс. руб. за один литр)</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>            
              </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export {Plannings};
