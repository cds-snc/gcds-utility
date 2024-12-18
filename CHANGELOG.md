([Français](#journal-des-modifications))

# Changelog

All notable changes to this project will be documented in this file.

## 1.0.0 (2024-12-18)


### Features

* add additional display classes ([#191](https://github.com/cds-snc/gcds-utility/issues/191)) ([7917aa1](https://github.com/cds-snc/gcds-utility/commit/7917aa1515cb05ef05dc64044775aa7e983f5c5f))
* add focus styling to links ([#179](https://github.com/cds-snc/gcds-utility/issues/179)) ([f0e2861](https://github.com/cds-snc/gcds-utility/commit/f0e2861b50657aeea20731550b75ae76f7c323c6))
* add link size class + add character limit for paragraphs ([#137](https://github.com/cds-snc/gcds-utility/issues/137)) ([067e55d](https://github.com/cds-snc/gcds-utility/commit/067e55d0df077fa30b1bfce6787a048517712afe))
* add visited state to link styling ([#169](https://github.com/cds-snc/gcds-utility/issues/169)) ([07da60a](https://github.com/cds-snc/gcds-utility/commit/07da60af16c091e51b25a75a361831d18cfa3781))
* integrate new global background tokens ([#143](https://github.com/cds-snc/gcds-utility/issues/143)) ([3c803d3](https://github.com/cds-snc/gcds-utility/commit/3c803d3b08bce0c020573d7865b66a523141e27a))
* publish new packages to CDN ([#48](https://github.com/cds-snc/gcds-utility/issues/48)) ([0261ffb](https://github.com/cds-snc/gcds-utility/commit/0261ffb5e142d9e2ea7891f7b573433103955cd9))
* send deployment metric to sentinel ([96a2863](https://github.com/cds-snc/gcds-utility/commit/96a286348f706c4f9415306c9f6c8e350dcb00a4))
* Slack notify on publish workflow failure ([#50](https://github.com/cds-snc/gcds-utility/issues/50)) ([d572891](https://github.com/cds-snc/gcds-utility/commit/d5728913b93eb2649e4fd4b066f2ad24bb256c36))
* update utility framework with new typography + spacing tokens ([#197](https://github.com/cds-snc/gcds-utility/issues/197)) ([f6c2a24](https://github.com/cds-snc/gcds-utility/commit/f6c2a248547be78cb800fbb5770de99e457d8e30))


### Bug Fixes

* Change CSS to fix link style in Safari ([#164](https://github.com/cds-snc/gcds-utility/issues/164)) ([ce9434a](https://github.com/cds-snc/gcds-utility/commit/ce9434a3db11a9f3e9d3949f40f5079ee9e798f4))
* use the correct OIDC role for the repo ([#49](https://github.com/cds-snc/gcds-utility/issues/49)) ([e615349](https://github.com/cds-snc/gcds-utility/commit/e615349de78d1a24c6254206cf05710c8e41aae4))

## [1.5.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.4.0...gcds-utility-v1.5.0) 

Released on: 2024-12-05

### :rocket: New Features

* add additional display classes ([#191](https://github.com/cds-snc/gcds-utility/issues/191)) ([7917aa1](https://github.com/cds-snc/gcds-utility/commit/7917aa1515cb05ef05dc64044775aa7e983f5c5f))

### :rotating_light: Breaking changes

* update utility framework with new typography + spacing tokens ([#197](https://github.com/cds-snc/gcds-utility/issues/197)) ([f6c2a24](https://github.com/cds-snc/gcds-utility/commit/f6c2a248547be78cb800fbb5770de99e457d8e30))

As part of ongoing efforts to align with the Canada.ca Specifications, we have made updates to our spacing and typography scales.
These updates were introduced with the [latest release of our design tokens](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

### Spacing changes

* New spacing classes are now available
* The values of all previous classes have changed
  - `margin`
  - `padding`
 
We have updated the values of spacing classes. While some classes still remain, their underlying value in rem or pixels have changed. Check the spacing section of our tokens release for the updated pixel values.

_Example_: If you were previously using `mt-400` for `margin top 400` it will be updated to `32px`. If you want to keep its previous size of `24px`, you need to change your code to use `mt-300` instead. Here is a [visual mapping guide](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) to help you identify the values you need to use.
    
### Typography changes
* All `caption` classes have been deprecated and replaced with `text-small` including their variations for all the different viewports and states:
    - | Old Class | New Class |
      | - | - |
      |`.font-caption`|`.font-text-small`|
      |`.font-size-caption` |`.font-size-text-small` |
      |`.line-caption` | `.line-text-small`|
      |`.icon-caption`|`.icon-text-small`|

## [1.4.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.3.0...gcds-utility-v1.4.0)

Released on: 2024-09-11

### :rocket: New Features

* add focus styling to links ([#179](https://github.com/cds-snc/gcds-utility/issues/179)) ([f0e2861](https://github.com/cds-snc/gcds-utility/commit/f0e2861b50657aeea20731550b75ae76f7c323c6))

## [1.3.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.2.2...gcds-utility-v1.3.0)

Released on: 2024-08-01

### :rocket: New Features

- add visited state to link styling ([#169](https://github.com/cds-snc/gcds-utility/issues/169)) ([07da60a](https://github.com/cds-snc/gcds-utility/commit/07da60af16c091e51b25a75a361831d18cfa3781))

## [1.2.2](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.2.1...gcds-utility-v1.2.2)

Released on: 2024-07-15

### :bug: :wrench: Bug Fixes

- Change CSS to fix link style in Safari ([#164](https://github.com/cds-snc/gcds-utility/issues/164)) ([ce9434a](https://github.com/cds-snc/gcds-utility/commit/ce9434a3db11a9f3e9d3949f40f5079ee9e798f4))

## [1.2.1](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.2.0...gcds-utility-v1.2.1)

Released on: 2024-05-29

### :arrows_counterclockwise: Code Refactoring

- change monospace font to noto sans mono ([#151](https://github.com/cds-snc/gcds-utility/issues/151)) ([ca5d9e0](https://github.com/cds-snc/gcds-utility/commit/ca5d9e0c79ce49f410d12578d567e138939f62e7))

## [1.2.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.1.0...gcds-utility-v1.2.0)

Released on: 2024-05-08

### :rocket: New Features

- integrate new global background tokens ([#143](https://github.com/cds-snc/gcds-utility/issues/143)) ([3c803d3](https://github.com/cds-snc/gcds-utility/commit/3c803d3b08bce0c020573d7865b66a523141e27a))

## [1.1.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.0.7...gcds-utility-v1.1.0)

Released on: 2024-04-22

### :rocket: New Features

- add link size class + add character limit for paragraphs ([#137](https://github.com/cds-snc/gcds-utility/issues/137)) ([067e55d](https://github.com/cds-snc/gcds-utility/commit/067e55d0df077fa30b1bfce6787a048517712afe))

## v1.0.7

Released on: 2023-10-30

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-utility/pull/100 - [9140cbc](https://github.com/cds-snc/gcds-utility/pull/100/commits/9140cbc414d0ee649b52a4abfec8d23412e9aaf3) - Add mandatory border to h1 reset styles

## v1.0.6

Released on: 2023-10-25

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-utility/pull/94 - [a9aebb0](https://github.com/cds-snc/gcds-utility/pull/94/commits/a9aebb054880b48acba94ba68cd5a5681f2e21f1) - Add mobile font styles
- https://github.com/cds-snc/gcds-utility/pull/94 - [1889762](https://github.com/cds-snc/gcds-utility/pull/94/commits/18897629271fbe0097715605814018d0308c9f5c) - Add character limit tokens for headings

## v1.0.5

Released on: 2023-06-22

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-utility/pull/61 - [9c9ede2](https://github.com/cds-snc/gcds-utility/pull/61/commits/9c9ede21afd8cbc3cdce3b396ee23189946f6304) - Update with new token file structure

## v1.0.4

Released on: 2023-05-31

### :rocket: New features

- CDN support
  - https://github.com/cds-snc/gcds-utility/pull/48 - [1eabad4](https://github.com/cds-snc/gcds-utility/pull/48/commits/1eabad4528f74ff20c73519da66544dc653f5466) - Publish new packages to CDN

### :rotating_light: Breaking changes

- Update installation instructions
  - https://github.com/cds-snc/gcds-utility/pull/52 - [ffb2d51](https://github.com/cds-snc/gcds-utility/pull/52/commits/ffb2d51655c1403c64f1ed9a8b418e8fc13f7b98) - Update unpkg link in readme to use new cdn link
  - https://github.com/cds-snc/gcds-utility/pull/54 - [ad8f18b](https://github.com/cds-snc/gcds-utility/pull/54/commits/ad8f18b49f7ceaf768e44810494b88f7e153cd0b) - Add @cdssnc prefix to package name in install command

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-utility/pull/55 - [58aa275](https://github.com/cds-snc/gcds-utility/pull/55/commits/58aa27513bafb5df15b3685a099647cfbe274a8d) - Update version to include colour tokens update

## v1.0.3

Released on: 2023-05-08

### :rotating_light: Breaking changes

- Compiled utility file
  - https://github.com/cds-snc/gcds-utility/pull/45 - [2ad73e9](https://github.com/cds-snc/gcds-utility/pull/45/commits/2ad73e940da4689f5c83dba484c81dfe45009d26) - Rename compiled utility file to gcds-utility.css

### :jigsaw: Patch

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

## v1.0.2

Released on: 2023-03-23

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-utility/pull/36 - [ed40eca](https://github.com/cds-snc/gcds-utility/pull/36/commits/ed40ecaf959384f751ca1875af91e598c6cf3873) - Switch to using gcds-tokens package

## v1.0.1

Released on: 2023-03-13

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-utility/pull/28 - [61cc8f6](https://github.com/cds-snc/gcds-utility/commit/61cc8f602a406ab4e635d1e9431428d073651a91) - Update readme and package.json with new url
- https://github.com/cds-snc/gcds-utility/pull/28 - [5709c03](https://github.com/cds-snc/gcds-utility/commit/5709c035c3a3925ba315d7f0643cdbbd83228d8e) - Update repository + issues URL

## v1.0.0

Released on: 2023-02-10

### :rocket: New features

- First release of the GC Design system utility framework.

---

# Journal des modifications

Tout changement important à ce projet sera consigné dans le présent fichier.

## [1.5.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.4.0...gcds-utility-v1.5.0)

Version publiée le :  2024-12-05

### :rocket: Nouvelles fonctionnalités

* Ajouter de nouvelles classes d'affichage ([#191](https://github.com/cds-snc/gcds-utility/issues/191)) ([7917aa1](https://github.com/cds-snc/gcds-utility/commit/7917aa1515cb05ef05dc64044775aa7e983f5c5f))

### :rotating_light: Changement non rétrocompatibles

* mettre à jour le cadre utilitaire avec de nouvelles typographies + unités de style d'espacement ([#197](https://github.com/cds-snc/gcds-utility/issues/197)) ([f6c2a24](https://github.com/cds-snc/gcds-utility/commit/f6c2a248547be78cb800fbb5770de99e457d8e30))

Dans le cadre de nos efforts continus pour s'aligner sur les spécifications de Canada.ca, nous avons mis à jour nos échelles d'espacement et de typographie. Ces mises à jour ont été introduites avec [la dernière version de nos unités de style de conception](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

### Changement d’espacement

* De nouvelles classes d'espacement sont maintenant disponibles
* Les valeurs de toutes les classes précédentes ont changé
  - `margin` (marge)
  - `padding` (marges intérieures)
 
Nous avons mis à jour les valeurs des classes d'espacement. Bien que certaines classes restent encore, leur valeur sous-jacente en rem ou en pixels a changé. Vérifiez la section d'espacement de notre nouvelle publication d'unités de style pour les valeurs de pixel mises à jour.


_Exemple_: Si vous utilisiez auparavant mt-400 pour une marge supérieure de 400, elle sera mise à jour à 32px. Si vous souhaitez conserver sa taille précédente de 24px, vous devez modifier votre code pour utiliser mt-300 à la place. Voici un [guide de cartographie visuelle](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) pour vous aider à identifier les valeurs que vous devez utiliser.
    
### Changement de typographie
* Toutes les classes `caption` ont été dépréciées et remplacées par `text-small`, y compris leurs variations pour tous les différents affichages et états :
    - | Ancienne Classe | Nouvelle Classe |
      | - | - |
      |`.font-caption`|`.font-text-small`|
      |`.font-size-caption` |`.font-size-text-small` |
      |`.line-caption` | `.line-text-small`|
      |`.icon-caption`|`.icon-text-small`|

## [1.4.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.3.0...gcds-utility-v1.4.0)

Version publiée le : 2024-09-11

### :rocket: Nouvelle fonctionnalité

* ajout du style focus au liens ([#179](https://github.com/cds-snc/gcds-utility/issues/179)) ([f0e2861](https://github.com/cds-snc/gcds-utility/commit/f0e2861b50657aeea20731550b75ae76f7c323c6))

## [1.3.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.2.2...gcds-utility-v1.3.0)

Version publiée le : 2024-08-01

### :rocket: Nouvelle fonctionnalité

- ajout du statut visité au style de liens ([#169](https://github.com/cds-snc/gcds-utility/issues/169)) ([07da60a](https://github.com/cds-snc/gcds-utility/commit/07da60af16c091e51b25a75a361831d18cfa3781))

## [1.2.2](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.2.1...gcds-utility-v1.2.2)

Version publiée le : 2024-07-15

### :bug: :wrench: Correction de bogues

- changement au CSS pour corriger le style des liens dans Safari ([#164](https://github.com/cds-snc/gcds-utility/issues/164)) ([ce9434a](https://github.com/cds-snc/gcds-utility/commit/ce9434a3db11a9f3e9d3949f40f5079ee9e798f4))

## [1.2.1](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.2.0...gcds-utility-v1.2.1)

Version publiée le : 2024-05-29

### :arrows_counterclockwise: Refactorisation de code

- changer la police de monospace à noto sans mono ([#151](https://github.com/cds-snc/gcds-utility/issues/151)) ([ca5d9e0](https://github.com/cds-snc/gcds-utility/commit/ca5d9e0c79ce49f410d12578d567e138939f62e7))

## [1.2.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.1.0...gcds-utility-v1.2.0)

Version publiée le : 2024-05-08

### :rocket: Nouvelle fonctionnalité

- intégrer la nouvelle unité de style globale 'background'
 ([#143](https://github.com/cds-snc/gcds-utility/issues/143)) ([3c803d3](https://github.com/cds-snc/gcds-utility/commit/3c803d3b08bce0c020573d7865b66a523141e27a))

## [1.1.0](https://github.com/cds-snc/gcds-utility/compare/gcds-utility-v1.0.7...gcds-utility-v1.1.0)

Version publiée le : 2024-04-22

### :rocket: Nouvelle fonctionnalité

- ajouter une classe de grosseur du lien + ajouter une limite de caractères pour les paragraphes ([#137](https://github.com/cds-snc/gcds-utility/issues/137)) ([067e55d](https://github.com/cds-snc/gcds-utility/commit/067e55d0df077fa30b1bfce6787a048517712afe))

## v1.0.7

Version publiée le : 2023-10-30

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-utility/pull/100 - [9140cbc](https://github.com/cds-snc/gcds-utility/pull/100/commits/9140cbc414d0ee649b52a4abfec8d23412e9aaf3) \- Ajout d’une bordure obligatoire aux styles de réinitialisation h1

## v1.0.6

Version publiée le : 2023-10-25

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-utility/pull/94 - [a9aebb0](https://github.com/cds-snc/gcds-utility/pull/94/commits/a9aebb054880b48acba94ba68cd5a5681f2e21f1) \- Ajout de styles de police pour les appareils mobiles
- https://github.com/cds-snc/gcds-utility/pull/94 - [1889762](https://github.com/cds-snc/gcds-utility/pull/94/commits/18897629271fbe0097715605814018d0308c9f5c) \- Ajout de jetons de limite de caractères pour les titres

## v1.0.5

Version publiée le : 2023-06-22

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-utility/pull/61 - [9c9ede2](https://github.com/cds-snc/gcds-utility/pull/61/commits/9c9ede21afd8cbc3cdce3b396ee23189946f6304) \- Nouvelle structure de fichier de jetons

## v1.0.4

Version publiée le : 2023-05-31

### :rocket: Nouvelles fonctionnalités

- Soutien CDN
  - https://github.com/cds-snc/gcds-utility/pull/48 - [1eabad4](https://github.com/cds-snc/gcds-utility/pull/48/commits/1eabad4528f74ff20c73519da66544dc653f5466) \- Publication de nouveaux packages au réseau de diffusion de contenu (CDN)

### :rotating_light: Changements cassants

- Mise à jour des instructions d'installation
  - https://github.com/cds-snc/gcds-utility/pull/52 - [ffb2d51](https://github.com/cds-snc/gcds-utility/pull/52/commits/ffb2d51655c1403c64f1ed9a8b418e8fc13f7b98) \- Mise à jour du lien unpkg dans le fichier lisez-moi afin d'utiliser le nouveau lien du CDN
  - https://github.com/cds-snc/gcds-utility/pull/54 - [ad8f18b](https://github.com/cds-snc/gcds-utility/pull/54/commits/ad8f18b49f7ceaf768e44810494b88f7e153cd0b) \- Ajout du préfixe @cdssnc au nom du package dans la commande d'installation

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-utility/pull/55 - [58aa275](https://github.com/cds-snc/gcds-utility/pull/55/commits/58aa27513bafb5df15b3685a099647cfbe274a8d) \- Mise à jour de la version afin d'inclure la mise à jour des jetons

## v1.0.3

Version publiée le : 2023-05-08

### :rotating_light: Changements cassants

- Fichier utilitaire compilé
  - https://github.com/cds-snc/gcds-utility/pull/45 - [2ad73e9](https://github.com/cds-snc/gcds-utility/pull/45/commits/2ad73e940da4689f5c83dba484c81dfe45009d26) \- Fichier utilitaire compilé renommé à gcds-utility.css

### :jigsaw: Correctif

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

## v1.0.2

Version publiée le : 2023-03-23

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-utility/pull/36 - [ed40eca](https://github.com/cds-snc/gcds-utility/pull/36/commits/ed40ecaf959384f751ca1875af91e598c6cf3873) \- Passer à l'utilisation du package gcds-tokens

## v1.0.1

Version publiée le : 2023-03-13

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-utility/pull/28 - [61cc8f6](https://github.com/cds-snc/gcds-utility/commit/61cc8f602a406ab4e635d1e9431428d073651a91) \- Mise à jour des URL du fichier lisez-moi et du package.json
- https://github.com/cds-snc/gcds-utility/pull/28 - [5709c03](https://github.com/cds-snc/gcds-utility/commit/5709c035c3a3925ba315d7f0643cdbbd83228d8e) \- Mise à jour de l'URL du référentiel + issues (problèmes)

## v1.0.0

Version publiée le : 2023-02-10

### :rocket: Nouvelles fonctionnalités

- Première version de l'infrastructure utilitaire de Système de design GC
