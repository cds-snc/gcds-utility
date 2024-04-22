([Français](#journal-des-modifications))

# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.0.7...gcds-utility-v1.1.0) (2024-04-22)


### New Features

* add link size class + add character limit for paragraphs ([#137](https://github.com/cds-snc/gcds-utility/issues/137)) ([067e55d](https://github.com/cds-snc/gcds-utility/commit/067e55d0df077fa30b1bfce6787a048517712afe))


### Documentation

* add french translations for changelog ([#124](https://github.com/cds-snc/gcds-utility/issues/124)) ([7d82d0b](https://github.com/cds-snc/gcds-utility/commit/7d82d0b3ed98e5781046ff0b30144f71943cab1b))

## v1.0.7 (2023-10-30)

### Patch

- https://github.com/cds-snc/gcds-utility/pull/100 - [9140cbc](https://github.com/cds-snc/gcds-utility/pull/100/commits/9140cbc414d0ee649b52a4abfec8d23412e9aaf3) - Add mandatory border to h1 reset styles

## v1.0.6 (2023-10-25)

### Patch

- https://github.com/cds-snc/gcds-utility/pull/94 - [a9aebb0](https://github.com/cds-snc/gcds-utility/pull/94/commits/a9aebb054880b48acba94ba68cd5a5681f2e21f1) - Add mobile font styles
- https://github.com/cds-snc/gcds-utility/pull/94 - [1889762](https://github.com/cds-snc/gcds-utility/pull/94/commits/18897629271fbe0097715605814018d0308c9f5c) - Add character limit tokens for headings

## v1.0.5 (2023-06-22)

### Patch

- https://github.com/cds-snc/gcds-utility/pull/61 - [9c9ede2](https://github.com/cds-snc/gcds-utility/pull/61/commits/9c9ede21afd8cbc3cdce3b396ee23189946f6304) - Update with new token file structure

## v1.0.4 (2023-05-31)

### New features

- CDN support
  - https://github.com/cds-snc/gcds-utility/pull/48 - [1eabad4](https://github.com/cds-snc/gcds-utility/pull/48/commits/1eabad4528f74ff20c73519da66544dc653f5466) - Publish new packages to CDN

### Breaking changes

- Update installation instructions
  - https://github.com/cds-snc/gcds-utility/pull/52 - [ffb2d51](https://github.com/cds-snc/gcds-utility/pull/52/commits/ffb2d51655c1403c64f1ed9a8b418e8fc13f7b98) - Update unpkg link in readme to use new cdn link
  - https://github.com/cds-snc/gcds-utility/pull/54 - [ad8f18b](https://github.com/cds-snc/gcds-utility/pull/54/commits/ad8f18b49f7ceaf768e44810494b88f7e153cd0b) - Add @cdssnc prefix to package name in install command

### Patch

- https://github.com/cds-snc/gcds-utility/pull/55 - [58aa275](https://github.com/cds-snc/gcds-utility/pull/55/commits/58aa27513bafb5df15b3685a099647cfbe274a8d) - Update version to include colour tokens update

## v1.0.3 (2023-05-08)

### Breaking changes

- Compiled utility file
  - https://github.com/cds-snc/gcds-utility/pull/45 - [2ad73e9](https://github.com/cds-snc/gcds-utility/pull/45/commits/2ad73e940da4689f5c83dba484c81dfe45009d26) - Rename compiled utility file to gcds-utility.css

### Patch

- https://github.com/cds-snc/gcds-utility/pull/46 - [fb1b236](https://github.com/cds-snc/gcds-utility/pull/46/commits/fb1b236f2e34f5ddf669dd84449485eafb555094) - Add class for gcds focus styling
- https://github.com/cds-snc/gcds-utility/pull/46 - [72f52e6](https://github.com/cds-snc/gcds-utility/pull/46/commits/72f52e6568be95ba64584668b4cf65498500ba67) - Improve default link display
- https://github.com/cds-snc/gcds-utility/pull/46 - [40473f1](https://github.com/cds-snc/gcds-utility/pull/46/commits/40473f1c0a991831d7d343fb368868e753c77c29) - Add support for background classes
- https://github.com/cds-snc/gcds-utility/pull/46 - [f113469](https://github.com/cds-snc/gcds-utility/pull/46/commits/f113469b59e0363bc1fbf1c5bc99dc0e29873270) - Add support for styling based on hover and focus classes
- https://github.com/cds-snc/gcds-utility/pull/46 - [22438dc](https://github.com/cds-snc/gcds-utility/pull/46/commits/22438dc38f9c03aa99159315855eaac1379d109e) - Add default border colour
- https://github.com/cds-snc/gcds-utility/pull/45 - [d345134](https://github.com/cds-snc/gcds-utility/pull/45/commits/d345134dcd5ff7e7984ff30ce8304f393fae3285) - Remove b-none duplicate
- https://github.com/cds-snc/gcds-utility/pull/45 - [9b22f37](https://github.com/cds-snc/gcds-utility/pull/45/commits/9b22f3720d63d329dd0dbd5bef33d008806034f4) - Fix value of .break-all class
- https://github.com/cds-snc/gcds-utility/pull/45 - [e54d331](https://github.com/cds-snc/gcds-utility/pull/45/commits/e54d3316a8bf5bb04e049373866c20fe0319739e) - Rename borderSizes variable to borderWidth
- https://github.com/cds-snc/gcds-utility/pull/45 - [e7fb19e](https://github.com/cds-snc/gcds-utility/pull/45/commits/e7fb19ed69d482c806281b7dda80a0efba8a05f3) - Add border-radius classes
- https://github.com/cds-snc/gcds-utility/pull/45 - [d66ae57](https://github.com/cds-snc/gcds-utility/pull/45/commits/d66ae57e32dac3475ddb1bf895d9cf30a414d3f0) - Adjust breakpoints to align with component breakpoints
- https://github.com/cds-snc/gcds-utility/pull/45 - [dc3d10a](https://github.com/cds-snc/gcds-utility/pull/45/commits/dc3d10a197104f8752a24f8a0530d13ead29f9ca) - Update icon sizes to match icon component

## v1.0.2 (2023-03-23)

### Patch

- https://github.com/cds-snc/gcds-utility/pull/36 - [ed40eca](https://github.com/cds-snc/gcds-utility/pull/36/commits/ed40ecaf959384f751ca1875af91e598c6cf3873) - Switch to using gcds-tokens package

## v1.0.1 (2023-03-13)

### Patch

- https://github.com/cds-snc/gcds-utility/pull/28 - [61cc8f6](https://github.com/cds-snc/gcds-utility/commit/61cc8f602a406ab4e635d1e9431428d073651a91) - Update readme and package.json with new url
- https://github.com/cds-snc/gcds-utility/pull/28 - [5709c03](https://github.com/cds-snc/gcds-utility/commit/5709c035c3a3925ba315d7f0643cdbbd83228d8e) - Update repository + issues URL

## v1.0.0 (2023-02-10)

### New features

- First release of the GC Design system utility framework.

---

# Journal des modifications

Tout changement important à ce projet sera consigné dans le présent fichier.

## v1.0.7 (2023-10-30)

### Correctif

- https://github.com/cds-snc/gcds-utility/pull/100 - [9140cbc](https://github.com/cds-snc/gcds-utility/pull/100/commits/9140cbc414d0ee649b52a4abfec8d23412e9aaf3) \- Ajout d’une bordure obligatoire aux styles de réinitialisation h1

## v1.0.6 (2023-10-25)

### Correctif

- https://github.com/cds-snc/gcds-utility/pull/94 - [a9aebb0](https://github.com/cds-snc/gcds-utility/pull/94/commits/a9aebb054880b48acba94ba68cd5a5681f2e21f1) \- Ajout de styles de police pour les appareils mobiles
- https://github.com/cds-snc/gcds-utility/pull/94 - [1889762](https://github.com/cds-snc/gcds-utility/pull/94/commits/18897629271fbe0097715605814018d0308c9f5c) \- Ajout de jetons de limite de caractères pour les titres

## v1.0.5 (2023-06-22)

### Correctif

- https://github.com/cds-snc/gcds-utility/pull/61 - [9c9ede2](https://github.com/cds-snc/gcds-utility/pull/61/commits/9c9ede21afd8cbc3cdce3b396ee23189946f6304) \- Nouvelle structure de fichier de jetons

## v1.0.4 (2023-05-31)

### Nouvelles fonctionnalités

- Soutien CDN
  - https://github.com/cds-snc/gcds-utility/pull/48 - [1eabad4](https://github.com/cds-snc/gcds-utility/pull/48/commits/1eabad4528f74ff20c73519da66544dc653f5466) \- Publication de nouveaux packages au réseau de diffusion de contenu (CDN)

### Changements cassants

- Mise à jour des instructions d'installation
  - https://github.com/cds-snc/gcds-utility/pull/52 - [ffb2d51](https://github.com/cds-snc/gcds-utility/pull/52/commits/ffb2d51655c1403c64f1ed9a8b418e8fc13f7b98) \- Mise à jour du lien unpkg dans le fichier lisez-moi afin d'utiliser le nouveau lien du CDN
  - https://github.com/cds-snc/gcds-utility/pull/54 - [ad8f18b](https://github.com/cds-snc/gcds-utility/pull/54/commits/ad8f18b49f7ceaf768e44810494b88f7e153cd0b) \- Ajout du préfixe @cdssnc au nom du package dans la commande d'installation

### Correctif

- https://github.com/cds-snc/gcds-utility/pull/55 - [58aa275](https://github.com/cds-snc/gcds-utility/pull/55/commits/58aa27513bafb5df15b3685a099647cfbe274a8d) \- Mise à jour de la version afin d'inclure la mise à jour des jetons

## v1.0.3 (2023-05-08)

### Changements cassants

- Fichier utilitaire compilé
  - https://github.com/cds-snc/gcds-utility/pull/45 - [2ad73e9](https://github.com/cds-snc/gcds-utility/pull/45/commits/2ad73e940da4689f5c83dba484c81dfe45009d26) \- Fichier utilitaire compilé renommé à gcds-utility.css

### Correctif

- https://github.com/cds-snc/gcds-utility/pull/46 - [fb1b236](https://github.com/cds-snc/gcds-utility/pull/46/commits/fb1b236f2e34f5ddf669dd84449485eafb555094) \- Ajout d'une classe pour le style de mise au point de Système de design
- https://github.com/cds-snc/gcds-utility/pull/46 - [72f52e6](https://github.com/cds-snc/gcds-utility/pull/46/commits/72f52e6568be95ba64584668b4cf65498500ba67) \- Amélioration de l'affichage des liens par défaut
- https://github.com/cds-snc/gcds-utility/pull/46 - [40473f1](https://github.com/cds-snc/gcds-utility/pull/46/commits/40473f1c0a991831d7d343fb368868e753c77c29) \- Prise en charge des classes d'arrière-plan
- https://github.com/cds-snc/gcds-utility/pull/46 - [f113469](https://github.com/cds-snc/gcds-utility/pull/46/commits/f113469b59e0363bc1fbf1c5bc99dc0e29873270) \- Prise en charge de la mise en forme basée sur les classes de survol et de mise au point
- https://github.com/cds-snc/gcds-utility/pull/46 - [22438dc](https://github.com/cds-snc/gcds-utility/pull/46/commits/22438dc38f9c03aa99159315855eaac1379d109e) \- Ajout d'une couleur de bordure par défaut
- https://github.com/cds-snc/gcds-utility/pull/45 - [d345134](https://github.com/cds-snc/gcds-utility/pull/45/commits/d345134dcd5ff7e7984ff30ce8304f393fae3285) \- Suppression du doublon b-none
- https://github.com/cds-snc/gcds-utility/pull/45 - [9b22f37](https://github.com/cds-snc/gcds-utility/pull/45/commits/9b22f3720d63d329dd0dbd5bef33d008806034f4) \- Correction de la valeur de la classe .break-all
- https://github.com/cds-snc/gcds-utility/pull/45 - [e54d331](https://github.com/cds-snc/gcds-utility/pull/45/commits/e54d3316a8bf5bb04e049373866c20fe0319739e) \- Variable borderSizes renommée à borderWidth
- https://github.com/cds-snc/gcds-utility/pull/45 - [e7fb19e](https://github.com/cds-snc/gcds-utility/pull/45/commits/e7fb19ed69d482c806281b7dda80a0efba8a05f3) \- Ajout des classes border-radius
- https://github.com/cds-snc/gcds-utility/pull/45 - [d66ae57](https://github.com/cds-snc/gcds-utility/pull/45/commits/d66ae57e32dac3475ddb1bf895d9cf30a414d3f0) \- Ajustement des points d'arrêt pour qu'ils soient alignés sur les points d'arrêt des composants
- https://github.com/cds-snc/gcds-utility/pull/45 - [dc3d10a](https://github.com/cds-snc/gcds-utility/pull/45/commits/dc3d10a197104f8752a24f8a0530d13ead29f9ca) \- Mise à jour de la taille des icônes pour qu'elles correspondent au composant icône

## v1.0.2 (2023-03-23)

### Correctif

- https://github.com/cds-snc/gcds-utility/pull/36 - [ed40eca](https://github.com/cds-snc/gcds-utility/pull/36/commits/ed40ecaf959384f751ca1875af91e598c6cf3873) \- Passer à l'utilisation du package gcds-tokens

## v1.0.1 (2023-03-13)

### Correctif

- https://github.com/cds-snc/gcds-utility/pull/28 - [61cc8f6](https://github.com/cds-snc/gcds-utility/commit/61cc8f602a406ab4e635d1e9431428d073651a91) \- Mise à jour des URL du fichier lisez-moi et du package.json
- https://github.com/cds-snc/gcds-utility/pull/28 - [5709c03](https://github.com/cds-snc/gcds-utility/commit/5709c035c3a3925ba315d7f0643cdbbd83228d8e) \- Mise à jour de l'URL du référentiel + issues (problèmes)

## v1.0.0 (2023-02-10)

### Nouvelles fonctionnalités

- Première version de l'infrastructure utilitaire de Système de design GC
