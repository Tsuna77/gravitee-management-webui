/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 class DocumentationService {

  constructor($http, baseURL) {
    'ngInject';
    this.$http = $http;
    this.documentationURL = function (apiId) {
      return baseURL + 'apis/' + apiId + '/pages/';
    };
  }

   list(apiId) {
     return this.$http.get(this.documentationURL(apiId));
   }

   get(apiId, pageId) {
     return this.$http.get(this.documentationURL(apiId) + pageId);
   }

   getContentUrl(apiId, pageId) {
     return this.documentationURL(apiId) + pageId + '/content';
   }

  createPage(apiId, newPage) {
    return this.$http.post(this.documentationURL(apiId), newPage);
  }

  deletePage(apiId, pageId) {
    return this.$http.delete(this.documentationURL(apiId) + pageId);
  }

  editPage(apiId, pageId, editPage) {
    return this.$http.put(this.documentationURL(apiId) + pageId,
      {
        name: editPage.name,
        description: editPage.description,
        order: editPage.order,
        published: editPage.published,
        content: editPage.content
      }
    );
  }
}

export default DocumentationService;