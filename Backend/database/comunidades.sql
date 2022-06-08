create schema web_project;

create table communidades;

CREATE TABLE `web_project`.`comunidades` (
  `id_comunidad`INT AUTO_INCREMENT NOT NULL ,
  `nombre_comunidad` VARCHAR(30) NULL,
  `descripcion_comunidad` VARCHAR(400) NULL,
  `imagen_comunidad` VARCHAR(300) NULL ,
  `clientid_comunidad` VARCHAR(200) NOT NULL,
  `secret_comunidad` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_comunidad`));
  
INSERT INTO web_project.comunidades(nombre_comunidad, descripcion_comunidad, imagen_comunidad, clientid_comunidad, secret_comunidad) values("Comunidad 1", "Somos una comunidad que se dedica al cultivo de camarón","https://elproductor.com/wp-content/uploads/2017/07/dt.common.streams.StreamServer.jpg","AVUoA0LlZv0n4yuq9wT2UtpYgbpKe-fSb57OW2mYFqxW8OsEdmVVkOmAU9mvmw9rPmTIIsajTjlbjU4o", "EN2C11TNTglJkybqys6as5CeCHOUYRLCt4ODEdVGJIl882iEfU_VjPJlo7bXI8kPtH8LnbqPG-wwUsqJ");
INSERT INTO web_project.comunidades(nombre_comunidad, descripcion_comunidad, imagen_comunidad, clientid_comunidad, secret_comunidad) values("Comunidad 2", "Somos una comunidad que se dedica al cultivo de Arroz","https://cdn.semanariolacalle.com/2019/07/Siembra-de-arroz-se-redujo-en-primer-semestre-en-el-Cesar.jpg","AWMVFYouJTpAy5zFpm12UtQxZOOYSY-ImNLKZrGclQ-HZ95hQzp1SZFyIfZHfc_1mzm79Ii4GHEIu0tp","ELo6xaG_bNEpXyEKtP31qBJ5JPSAISfw9DIpoqZZHnQjC7u6LfcjsCokLyBKUQ5KnnxVfO49JfEyRRlY");
INSERT INTO web_project.comunidades(nombre_comunidad, descripcion_comunidad, imagen_comunidad, clientid_comunidad, secret_comunidad) values("Comunidad 3", "Somos una comunidad que se dedica al cultivo de Aguacates","https://img.lalr.co/cms/2019/01/25163859/Aguacate-hass.jpg","ATeR-cUliEXbiOAtRELyKMG_BYsg8ld15dYJLuoo92hCe3JeShk0UoFS-JCRxMYAeWP_vocsimFt7RPr","EM1Bm_QI1fK8djTdW-LoQXpuxMb8cjw24wrSr0lGtbrTeajywDoFE0_EWC5mI0yomqru4PthDEJvnXv_");
INSERT INTO web_project.comunidades(nombre_comunidad, descripcion_comunidad, imagen_comunidad, clientid_comunidad, secret_comunidad) values("Comunidad 4", "Somos una comunidad que vive en la Sierra y carece de poder acceder de forma inmediata a insumos de primera necesidad","https://c.pxhere.com/photos/41/1e/family_sierra_peru-606505.jpg!d","AfEEhELUgj7Ac1fR5lZ-GyGTgcyGXA5U6v6lQUS7Veaz8-6TTC1CltEO_G2RDXepA9ZqNvuy344_AV1O","EBLlAe7gWltyuCjmqXs6xWAAopN5tQGJrbxXtYg2QdeAP6rQdk3QyJ8Iamscefbioxq3HoWxCRXJtEYU");

select * from web_project.comunidades;


drop TABLE comunidades;