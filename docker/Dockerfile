# On part de l'image long term service (en alpine pour le poids)
FROM node:lts-alpine

# Installe http-server (simple serveur pour contenu statique)
RUN npm install -g http-server

# On se rends dans (et on créé) le dossier /projet
WORKDIR /projet

# Copie du projet node dans le dossier /projet
COPY --chown=node:node portfolio/ .

# Met en variable d'environnement le port 80 pour http-server & le path où va être lancé le serveur
ENV PORT=80 PORTFOLIO_URL=/containers/alixjeudi--lemoine-portfolio/

# Installe les dépendances nécéssaires 
RUN npm install

# Lance la construction du projet
RUN npm run build

# Expose le port 80
EXPOSE 80

# Lance le serveur sur le dossier dist (le projet est build dedans)
CMD ["http-server", "dist"]
