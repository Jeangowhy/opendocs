

.. code-block:: bash

   # Read HarmonyOS Doc by API: Canvas Development
   DOCAPI=https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById
   json='{"objectId":"OID","version":"","catalogName":"harmonyos-guides-V2","language":"en"}'
   id=4_3canvas-development-0000001428061572-V2
   curl -d ${json/OID/$id} $DOCAPI | jq ".value.content.content" | pandoc -r html -t rst --list-table=true

   # Convert reStructuredText to HTML
   # docutils $0 $0.html

   exit


.. code-block:: bash

   #!/usr/bin/env -S deno run -A
   // AppGallery Connect 应用分发
   const json = '{"language":"cn","catalogName":"app","objectId":"agc-help-releaseapkrpk-0000001106463276"}'
   // HarmonyOS 3.1/4.0 开发者文档
   // const json = '{"language":"cn","catalogName":"harmonyos-guides-V2","objectId":"start-overview-0000001478061421-V2"}'
   const url = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getCatalogTree'
   fetch(url, {method:"POST", body:json})
   .then(res => res.json() )
   .then(res => {
       const recur = (list, pad="") => {
           if (list.length) console.log("")
           for (const it of list) {
               if (it.relateDocument) {
                   console.log(`${pad}* \`${it.nodeName} <${it.relateDocument}>\`__`)
               } else {
                   console.log(`${pad}* ${it.nodeName}`)
               }
               if (it.children) recur(it.children, pad + "   ")
           }
           if (list.length) console.log("")
       }
       recur(res.value.catalogTreeList) 
   })
   .catch(res=> console.log(res) )
   // Deno.exit(0)



/HarmonyOS 3.1 User Guide
===========================

   * `Getting Started <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_1getting-started-0000001478340845-V2>`__

      *  `Preparations <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-overview-0000001478061421-V2>`__
      *  `Getting Started with ArkTS in Stage Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-with-ets-stage-0000001477980905-V2>`__
      *  `Getting Started with ArkTS in FA Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-with-ets-fa-0000001427902184-V2>`__
      *  `Getting Started with JavaScript in FA Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-with-js-fa-0000001428061452-V2>`__

   * `Development Fundamentals <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_1development-fundamentals-0000001427584576-V2>`__

      *  `Application Package Fundamentals <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1application-package-fundamentals-0000001427744532-V2>`__

         *  `Application Package Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-package-overview-0000001478181125-V2>`__
         *  `Application Package Structure <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_2application-package-structure-0000001478340849-V2>`__
         *  `Application Package Structure in Stage Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-package-structure-stage-0000001478061425-V2>`__
         *  `Application Package Structure in FA Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-package-structure-fa-0000001477980909-V2>`__
         *  `Multi-HAP Mechanism <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_3multi-hap-mechanism-0000001428061456-V2>`__
         *  `Multi-HAP Design Objectives <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/multi-hap-objective-0000001427584580-V2>`__
         *  `Multi-HAP Build View <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/multi-hap-build-view-0000001427744536-V2>`__
         *  `Multi-HAP Development, Debugging, Release, and Deployment Process <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/multi-hap-release-deployment-0000001478181129-V2>`__
         *  `Multi-HAP Usage Rules <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/multi-hap-rules-0000001478340853-V2>`__
         *  `Multi-HAP Operation Mechanism and Data Communication Modes <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/multi-hap-principles-0000001478061429-V2>`__
         *  `Application Installation and Uninstallation Process <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-package-install-uninstall-0000001477980913-V2>`__
         *  `Application Package Update Process <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-package-update-0000001544583889-V2>`__
         *  `Shared Package <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_6shared-package-0000001523284064-V2>`__
         *  `Shared Package Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/shared-guide-0000001523444052-V2>`__
         *  `HAR <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/har-package-0000001574043989-V2>`__
         *  `HSP <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_3hsp-0000001573684153-V2>`__
         *  `In-Application HSP Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/in-app-hsp-0000001523124124-V2>`__
         *  `Quick Fix <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_7quick-fix-0000001544703817-V2>`__
         *  `Quick Fix Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/quickfix-principles-0000001493743976-V2>`__
         *  `CLI-based Quick Fix Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/quickfix-debug-0000001493903876-V2>`__

      *  `Application Configuration Files in Stage Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2application-configuration-files-in-stage-model-0000001427902192-V2>`__

         *  `Application Configuration File Overview (Stage Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-configuration-file-overview-stage-0000001428061460-V2>`__
         *  `app.json5 Configuration File <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/app-configuration-file-0000001427584584-V2>`__
         *  `module.json5 Configuration File <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2>`__

      *  `Application Configuration Files in FA Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_3application-configuration-files-in-fa-model-0000001478181133-V2>`__

         *  `Application Configuration File Overview (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-configuration-file-overview-fa-0000001478340857-V2>`__
         *  `Internal Structure of the app Tag <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/app-structure-0000001478061433-V2>`__
         *  `Internal structure of deviceConfig Tag <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/deviceconfig-structure-0000001477980917-V2>`__
         *  `Internal Structure of the module Tag <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/module-structure-0000001427902196-V2>`__

   *  `Resource Categories and Access <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/resource-categories-and-access-0000001544463977-V2>`__

   *  `Learning ArkTS <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_2learning-arkts-0000001493895336-V2>`__

      *  `Getting Started with ArkTS <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-get-started-0000001544695265-V2>`__
      *  `ArkTS Syntax (Declarative UI) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2arkts-syntax-declarative-ui-0000001544375777-V2>`__
      *  `Basic UI Description <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-basic-ui-description-0000001544455277-V2>`__
      *  `State Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_2state-management-0000001544455785-V2>`__
      *  `Basic Concepts <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-state-mgmt-concepts-0000001493575716-V2>`__
      *  `State Management with Page-level Variables <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-state-mgmt-page-level-0000001493415648-V2>`__
      *  `State Management with Application-level Variables <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-state-mgmt-application-level-0000001493735552-V2>`__
      *  `Dynamic UI Element Building <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-dynamic-ui-elememt-building-0000001544695225-V2>`__
      *  `Rendering Control <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-rendering-control-0000001544455441-V2>`__
      *  `Restrictions and Extensions <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkts-restrictions-and-extensions-0000001493895652-V2>`__

   *  Development

      *  `Application Models <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_1application-models-0000001478061441-V2>`__

         *  `Application Model Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1application-model-overview-0000001477980925-V2>`__
         *  `Elements of the Application Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-model-composition-0000001544384013-V2>`__
         *  `Interpretation of the Application Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-model-description-0000001493584092-V2>`__

      *  `Stage Model Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2stage-model-development-0000001427584596-V2>`__

         *  `Stage Model Development Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/stage-model-development-overview-0000001427744552-V2>`__
         *  `Stage Mode Application Components <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_2stage-mode-application-components-0000001478181145-V2>`__
         *  `Application- or Component-Level Configuration (Stage Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-component-configuration-stage-0000001478340869-V2>`__

      *  `UIAbility Component <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2uiability-component-0000001478061445-V2>`__

         *  `UIAbility Component Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/uiability-overview-0000001477980929-V2>`__
         *  `UIAbility Component Lifecycle <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/uiability-lifecycle-0000001427902208-V2>`__
         *  `UIAbility Component Launch Type <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/uiability-launch-type-0000001428061476-V2>`__
         *  `UIAbility Component Usage <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/uiability-usage-0000001427584600-V2>`__
         *  `Data Synchronization Between UIAbility and UI <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/uiability-data-sync-with-ui-0000001427744556-V2>`__
         *  `Intra-Device Interaction Between UIAbility Components <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/uiability-intra-device-interaction-0000001478181149-V2>`__

      *  `ExtensionAbility Component <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_3extensionability-component-0000001478340873-V2>`__
      *  `AbilityStage Component Container <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/abilitystage-0000001427584604-V2>`__
      *  `Context (Stage Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-context-stage-0000001427744560-V2>`__

      *  `Want <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_6want-0000001478181153-V2>`__

         *  `Want Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/want-overview-0000001478340877-V2>`__
         *  `Matching Rules of Explicit Want and Implicit Want <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/explicit-implicit-want-mappings-0000001478061453-V2>`__
         *  `Common action and entities Values <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/actions-entities-0000001477980937-V2>`__
         *  `Using Explicit Want to Start an Ability <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ability-startup-with-explicit-want-0000001427902216-V2>`__
         *  `Using Implicit Want to Open a Website <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ability-startup-with-implicit-want-0000001428061484-V2>`__
         *  `Using Want to Share Data Between Applications <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/data-share-via-want-0000001427584608-V2>`__
         *  `Process Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_3ipc-0000001427902220-V2>`__
         *  `Process Model Overview (Stage Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/process-model-stage-0000001428061488-V2>`__
         *  `Common Events <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2common-events-0000001427584612-V2>`__
         *  `Introduction to Common Events <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/common-event-overview-0000001427744568-V2>`__
         *  `Common Event Subscription <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/5_2common-event-subscription-0000001478181161-V2>`__
         *  `Common Event Subscription Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/common-event-subscription-overview-0000001493424228-V2>`__
         *  `Subscribing to Common Events in Dynamic Mode <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/common-event-subscription-0000001544583897-V2>`__
         *  `Subscribing to Common Events in Static Mode (for System Applications Only) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/common-event-static-subscription-0000001544703825-V2>`__
         *  `Unsubscribing from Common Events in Dynamic Mode <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/common-event-unsubscription-0000001493743984-V2>`__
         *  `Publishing Common Events <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/common-event-publish-0000001478340885-V2>`__
         *  `Thread Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_4inter-thread-communication-0000001427902224-V2>`__
         *  `Thread Model Overview (Stage Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/thread-model-stage-0000001428061492-V2>`__
         *  `Using Emitter for Inter-Thread Communication <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/itc-with-emitter-0000001427584616-V2>`__
         *  `Using Worker for Inter-Thread Communication <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/itc-with-worker-0000001427744572-V2>`__

      *  `FA Model Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_3fa-model-development-0000001427902228-V2>`__

         *  `FA Model Development Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/fa-model-development-overview-0000001428061496-V2>`__
         *  `FA Mode Application Components <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_2fa-mode-application-components-0000001427584620-V2>`__
         *  `Application- or Component-Level Configuration (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-component-configuration-fa-0000001427744576-V2>`__

      *  `PageAbility Component Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2pageability-component-development-0000001478181169-V2>`__

         *  `PageAbility Component Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/pageability-overview-0000001478340893-V2>`__
         *  `PageAbility Component Configuration <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/pageability-configuration-0000001478061469-V2>`__
         *  `PageAbility Lifecycle <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/pageability-lifecycle-0000001477980953-V2>`__
         *  `PageAbility Launch Type <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/pageability-launch-type-0000001427902232-V2>`__
         *  `Creating a PageAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/create-pageability-0000001428061500-V2>`__
         *  `Starting a Local PageAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-local-pageability-0000001427584624-V2>`__
         *  `Stopping a PageAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/stop-pageability-0000001427744580-V2>`__
         *  `Starting a Specified Page <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-page-0000001478340897-V2>`__
         *  `Window Properties <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/window-properties-0000001478061473-V2>`__
         *  `Requesting Permissions <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/request-permissions-0000001477980957-V2>`__
         *  `Redirection Rules <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/redirection-rules-0000001427902236-V2>`__

      *  `ServiceAbility Component Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_3serviceability-component-development-0000001428061504-V2>`__

         *  `ServiceAbility Component Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/serviceability-overview-0000001427584628-V2>`__
         *  `ServiceAbility Component Configuration <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/serviceability-configuration-0000001427744584-V2>`__
         *  `ServiceAbility Lifecycle <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/serviceability-lifecycle-0000001478181177-V2>`__
         *  `Creating a ServiceAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/create-serviceability-0000001478340901-V2>`__
         *  `Starting a ServiceAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-serviceability-0000001478061477-V2>`__
         *  `Connecting to a ServiceAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/connect-serviceability-0000001477980961-V2>`__
     
      *  `DataAbility Component Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_4dataability-component-development-0000001427902240-V2>`__

         *  `DataAbility Component Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/dataability-overview-0000001428061508-V2>`__
         *  `DataAbility Component Configuration <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/dataability-configuration-0000001427584632-V2>`__
         *  `DataAbility Lifecycle <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/dataability-lifecycle-0000001427744588-V2>`__
         *  `Creating a DataAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/create-dataability-0000001478181181-V2>`__
         *  `Starting a DataAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/start-dataability-0000001478340905-V2>`__
         *  `Accessing a DataAbility <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/access-dataability-0000001478061481-V2>`__
         *  `DataAbility Permission Control <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/dataability-permission-control-0000001477980965-V2>`__

      *  `Widget Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/widget-development-fa-0000001427902244-V2>`__
      *  `Context (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-context-fa-0000001428061512-V2>`__
      *  `Want (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/want-fa-0000001427584636-V2>`__

      *  Process Model and Thread Model

         *  `Process Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_3ipc-1-0000001427744592-V2>`__
         *  `Process Model Overview (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/process-model-fa-0000001478181185-V2>`__
         *  `Common Events (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/common-event-fa-0000001478340909-V2>`__
         *  `Thread Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_4inter-thread-communication-1-0000001477980969-V2>`__
         *  `Thread Model Overview (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/thread-model-fa-0000001427902248-V2>`__
         *  `Inter-Thread Communication (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/itc-fa-overview-0000001428061516-V2>`__

   *  `UI Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_2ui-development-0000001478181205-V2>`__

      *  `ArkUI Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkui-overview-0000001544375665-V2>`__
      
      *  `UI Development with ArkTS-based Declarative Development Paradigm <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/-with-arkts-based-declarative-development-paradigm-0000001478061505-V2>`__
      
         *  `Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-overview-0000001544455505-V2>`__
         *  `Declarative UI Development Guidelines <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-developing-intro-0000001544455257-V2>`__
         *  `Declarative UI Development Examples <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_3declarative-ui-development-examples-0000001544455285-V2>`__
         *  `Creating a Simple Page <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-creating-simple-page-0000001493575800-V2>`__
         *  `Building a Comprehensive Example <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2building-a-comprehensive-example-0000001544375677-V2>`__
         *  `Building a Food Data Model <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-building-data-model-0000001544455669-V2>`__
         *  `Building a Food Category List Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-building-category-list-layout-0000001544575529-V2>`__
         *  `Building a Food Category Grid Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-building-category-grid-layout-0000001544575433-V2>`__
         *  `Implementing Page Redirection and Data Transmission <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-page-redirection-data-transmission-0000001493735512-V2>`__
         *  `Adding a Splash Screen Animation <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_3adding-a--splash-screen-animation-0000001493735248-V2>`__
         *  `Using the Drawing Feature <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-drawing-feature-0000001544375441-V2>`__
         *  `Using the Animation Feature <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-animation-feature-0000001544695405-V2>`__
         *  `Common Components <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-components-intro-0000001544575561-V2>`__
         *  `Common Layout Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_5common-layout-development-0000001544695481-V2>`__
         *  `Adaptive Layouts <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_1adaptive-layouts-0000001493735632-V2>`__
         *  `Linear Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-layout-linear-0000001493415768-V2>`__
         *  `Statck Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-layout-stack-0000001544455509-V2>`__
         *  `Flex Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-layout-flex-0000001544695193-V2>`__
         *  `Grid Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-layout-grid-0000001544695237-V2>`__
         *  `Responsive Layouts <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2responsive-layouts-0000001493415832-V2>`__
         *  `Grid Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-layout-grid-container-new-0000001493895560-V2>`__
         *  `Media Query <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-layout-mediaquery-0000001493415896-V2>`__
         *  `Custom Component Lifecycle Callbacks <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-custom-component-lifecycle-callbacks-0000001544384037-V2>`__
         *  `Web Component Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-components-web-0000001544575421-V2>`__
         *  `Recommendations for Improving Performance <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-ts-performance-improvement-recommendation-0000001477981001-V2>`__
      
      *  `UI Development with JavaScript-compatible Web-like Development Paradigm <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/avascript-compatible-web-like-development-paradigm-0000001427902280-V2>`__

         *  `Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-overview-0000001428061548-V2>`__
         *  `Framework Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_2framework-overview-0000001427584672-V2>`__

            *  `File Organization <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-file-0000001427744628-V2>`__
            *  `"js" Tag <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-js-tag-0000001478181221-V2>`__
            *  `app.js <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-js-file-0000001478340945-V2>`__
            *  `Syntax <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_4syntax-0000001478061521-V2>`__
            *  `HML <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-syntax-hml-0000001477981005-V2>`__
            *  `CSS <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-syntax-css-0000001427902284-V2>`__
            *  `JavaScript <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-syntax-js-0000001428061552-V2>`__
            *  `Lifecycle <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-lifecycle-0000001427584676-V2>`__
            *  `Resource Limitations and Access <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-resource-restriction-0000001427744632-V2>`__
            *  `Multi-Language Capability <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/js-framework-multiple-languages-0000001478181225-V2>`__

         *  `Building the UI <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_3building-the-ui-0000001478340949-V2>`__

            *  `Component Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-component-0000001478061525-V2>`__
            *  `Building the Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2building-the-layout-0000001477981009-V2>`__
            *  `Layout Description <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-layout-intro-0000001427902288-V2>`__
            *  `Adding Title and Paragraph Text <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-layout-text-0000001428061556-V2>`__
            *  `Adding an Image <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-layout-image-0000001427584680-V2>`__
            *  `Adding a Comment <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-layout-comment-0000001427744636-V2>`__
            *  `Adding a Container <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-layout-external-container-0000001478181229-V2>`__
            *  `Adding Interactions <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-interactions-0000001478340953-V2>`__
            *  `Developing Animations <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-animation-0000001478061529-V2>`__
            *  `Defining Gesture Events <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-event-0000001477981013-V2>`__
            *  `Defining Page Routes <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-building-ui-routes-0000001427902292-V2>`__

         *  `Common Component Development Guidelines <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_4common-component-development-guidelines-0000001428061560-V2>`__

            *  `Container Component Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_1container-component-development-0000001427584684-V2>`__
            *  `<list> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-list-0000001427744640-V2>`__
            *  `<dialog> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-dialog-0000001478181233-V2>`__
            *  `<form> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-form-0000001478340957-V2>`__
            *  `<stepper> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-stepper-0000001478061533-V2>`__
            *  `<tabs> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-component-tabs-0000001477981017-V2>`__
            *  `<swiper> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-swiper-0000001427902296-V2>`__

            *  `Basic Component Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2basic-component-development-0000001428061564-V2>`__
            *  `<text> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-text-0000001427584688-V2>`__
            *  `<input> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-input-0000001427744644-V2>`__
            *  `<toolbar> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-toolbar-0000001478181237-V2>`__
            *  `<button> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-button-0000001478340961-V2>`__
            *  `<picker> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-picker-0000001478061537-V2>`__
            *  `<image> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-images-0000001477981021-V2>`__
            *  `<image-animator> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-image-animator-0000001427902300-V2>`__
            *  `<rating> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-rating-0000001428061568-V2>`__
            *  `<slider> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-slider-0000001427584692-V2>`__
            *  `<chart> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-chart-0000001427744648-V2>`__
            *  `<switch> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-switch-0000001478181241-V2>`__
            *  `<menu> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-menu-0000001478340965-V2>`__
            *  `<marquee> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-marquee-0000001478061541-V2>`__
            *  `<qrcode> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-qrcode-0000001477981025-V2>`__
            *  `<search> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-search-0000001427902304-V2>`__

            *  `Canvas Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_3canvas-development-0000001428061572-V2>`__
            *  `<canvas> Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-canvas-0000001427584696-V2>`__
            *  `CanvasRenderingContext2D <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-canvasrenderingcontext2d-0000001427744652-V2>`__
            *  `Path2D <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-path2d-0000001478181245-V2>`__
            *  `OffscreenCanvasRenderingContext2D <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-offscreencanvas-0000001478340969-V2>`__

            *  `Grid Layout <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-grid-0000001478061545-V2>`__

            *  `SVG Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_5svg-development-0000001477981029-V2>`__
            *  `Basics <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-svg-overview-0000001427902308-V2>`__
            *  `Graph Drawing <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-svg-graphics-0000001428061576-V2>`__
            *  `Path Drawing <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-svg-path-0000001427584700-V2>`__
            *  `Text Drawing <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-components-svg-text-0000001427744656-V2>`__

         *  `Animation Development Guidelines <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/3_5animation-development-guidelines-0000001478181249-V2>`__

            *  `CSS Animation <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_1css-animation-0000001478340973-V2>`__
            *  `Defining Attribute Style Animations <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-animate-attribute-style-0000001478061549-V2>`__
            *  `Defining Animations with the transform Attribute <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-animate-transform-0000001477981033-V2>`__
            *  `Defining Animations with the background-position Attribute <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-animate-background-position-style-0000001427902312-V2>`__
            *  `Defining Animations for SVG Components <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-animate-svg-0000001428061580-V2>`__
            *  `JS Animation <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/4_2js-animation-0000001427584704-V2>`__
            *  `Component Animation <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-animate-component-0000001427744660-V2>`__
            *  `Interpolator Animation <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/5_2interpolator-animation-0000001478181253-V2>`__
            *  `Animation Effect <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-animate-dynamic-effects-0000001478340977-V2>`__
            *  `Animation Frame <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-animate-frame-0000001478061553-V2>`__

         *  `Custom Components <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ui-js-custom-components-0000001477981037-V2>`__

      *  `Notification <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_3notification-0000001427902316-V2>`__

         *  `Notification Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/notification-overview-0000001428061584-V2>`__
         *  `Publishing a Notification <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_4publishing-a-notification-0000001478181257-V2>`__
         *  `Publishing a Basic Notification <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/text-notification-0000001478340981-V2>`__
         *  `Publishing a Progress Notification <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/progress-bar-notification-0000001478061557-V2>`__
         *  `Adding a WantAgent Object to a Notification <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/notification-with-wantagent-0000001477981041-V2>`__

      *  `Window Manager <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_4window-manager-0000001427902320-V2>`__

         *  `Window Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/window-overview-0000001428061588-V2>`__
         *  `Application Window Development (Stage Mode) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-window-stage-0000001427584712-V2>`__
         *  `Application Window Development (FA Model) <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/application-window-fa-0000001427744668-V2>`__

      *  `WebGL <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_5webgl-0000001493424248-V2>`__

         *  `WebGL Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/webgl-overview-0000001544583917-V2>`__
         *  `WebGL Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/webgl-guidelines-0000001544703845-V2>`__

      *  `Media <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_6media-0000001427902324-V2>`__

         *  `Audio and Video <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1audio-and-video-0000001493744004-V2>`__
         *  `Audio Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/audio-overview-0000001493903904-V2>`__
         *  `Audio Rendering Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/audio-renderer-0000001544464005-V2>`__
         *  `Audio Stream Management Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/audio-stream-manager-0000001544384041-V2>`__
         *  `Audio Capture Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/audio-capturer-0000001493584120-V2>`__
         *  `OpenSL ES Audio Playback Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/opensles-playback-0000001493424252-V2>`__
         *  `OpenSL ES Audio Recording Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/opensles-capture-0000001544583921-V2>`__
         *  `Audio Interruption Mode Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/audio-interruptmode-0000001544703849-V2>`__
         *  `Volume Management Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/audio-volume-manager-0000001493744008-V2>`__
         *  `AVPlayer Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/avplayer-playback-0000001544464009-V2>`__
         *  `AVRecorder Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/avrecorder-0000001544384049-V2>`__
         *  `Image <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_3image-0000001544695377-V2>`__
         *  `Image Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/image-0000001493735400-V2>`__

      *  `Security <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_7security-0000001427902336-V2>`__

         *  `Access Control <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1access-control-0000001544583929-V2>`__
         *  `Access Control (Permission) Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/accesstoken-overview-0000001544703857-V2>`__
         *  `Applying for Permissions <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/accesstoken-guidelines-0000001493744016-V2>`__
         *  `Verifying API Access Permissions <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/permission-verify-guidelines-0000001493903916-V2>`__
         *  `Application Permission List <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/permission-list-0000001544464017-V2>`__
         *  `User Authentication <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2user-authentication-0000001478061577-V2>`__
         *  `User Authentication Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/userauth-overview-0000001477981061-V2>`__
         *  `User Authentication Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/userauth-guidelines-0000001427902340-V2>`__
         *  `Key Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_3key-management-0000001428061608-V2>`__
         *  `HUKS Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/huks-overview-0000001496554665-V2>`__
         *  `HUKS Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/huks-guidelines-0000001496954177-V2>`__
         *  `HUKS Cipher Algorithm Specifications <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/huks-appendix-0000001446834210-V2>`__
         *  `Crypto Framework <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_4crypto-framework-0000001493424264-V2>`__
         *  `Crypto Framework Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/cryptoframework-overview-0000001544583933-V2>`__
         *  `Crypto Framework Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/cryptoframework-guidelines-0000001544703861-V2>`__
         *  `Certificate <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_5certificate-0000001453819540-V2>`__
         *  `Certificate Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/cert-overview-0000001503452709-V2>`__
         *  `Certificate Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/cert-guidelines-0000001503692477-V2>`__

      *  `Connectivity <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_8connectivity-0000001427744692-V2>`__

         *  `Network Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1network-management-0000001478181289-V2>`__
         *  `Network Management Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/net-mgmt-overview-0000001478341009-V2>`__
         *  `HTTP Data Request <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/http-request-0000001478061585-V2>`__
         *  `WebSocket Connection <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/websocket-connection-0000001477981069-V2>`__
         *  `Socket Connection <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/socket-connection-0000001427902348-V2>`__
         *  `IPC & RPC <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2ipc--rpc-0000001428061616-V2>`__
         *  `IPC & RPC Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ipc-rpc-overview-0000001427584740-V2>`__
         *  `IPC & RPC Development Guidelines <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/ipc-rpc-development-guideline-0000001427744696-V2>`__
         *  `Subscribing to State Changes of a Remote Object <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/subscribe-remote-state-0000001478181293-V2>`__

      *  `Telephony <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_9telephony-0000001478341013-V2>`__

         *  `Telephony Service Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/telephony-overview-0000001478061589-V2>`__
         *  `Redirecting to the Dial Screen <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/jumping-to-the-dial-screen-0000001477981073-V2>`__
         *  `Obtaining Current Cellular Network Signal Information <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/cellular-network-signal-info-0000001427902352-V2>`__

      *  `Data Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_10data-management-0000001428061620-V2>`__

         *  `Distributed Data Service <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1distributed-data-service-0000001544375561-V2>`__
         *  `Distributed Data Service Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/database-mdds-overview-0000001544375413-V2>`__
         *  `Distributed Data Service Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/database-mdds-guidelines-0000001544375277-V2>`__
         *  `Relational Database <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2relational-database-0000001493735716-V2>`__
         *  `RDB Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/database-relational-overview-0000001544695441-V2>`__
         *  `RDB Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/database-relational-guidelines-0000001544575209-V2>`__
         *  `Preferences <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_3preferences-0000001493895460-V2>`__
         *  `Preferences Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/database-preference-overview-0000001544455769-V2>`__
         *  `Preferences Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/database-preference-guidelines-0000001544695357-V2>`__

      *  `File Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_11file-management-0000001428061632-V2>`__

         *  `MediaLibrary Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1medialibrary-management-0000001493575608-V2>`__
         *  `MediaLibrary Development Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/medialibrary-overview-0000001493415552-V2>`__
         *  `Media Asset Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/medialibrary-resource-guidelines-0000001493895284-V2>`__
         *  `File Path Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/medialibrary-filepath-guidelines-0000001544695537-V2>`__
         *  `Album Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/medialibrary-album-guidelines-0000001544375585-V2>`__

      *  `Background Task Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_12task-management-0000001544703865-V2>`__

         *  `Background Task <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1background-task-0000001493744024-V2>`__
         *  `Background Task Management Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/background-task-overview-0000001493903924-V2>`__
         *  `Transient Task Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/transient-task-dev-guide-0000001544464025-V2>`__
         *  `Continuous Task Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/continuous-task-dev-guide-0000001544384065-V2>`__
         *  `Work Scheduler Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/work-scheduler-dev-guide-0000001493584140-V2>`__
         *  `WorkSchedulerExtensionAbility Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/workscheduler-extensionability-0000001493424272-V2>`__
         *  `Agent-Powered Reminder <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2agent-powered-reminder-0000001544703869-V2>`__
         *  `Agent-Powered Reminder Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/reminder-agent-overview-0000001493744028-V2>`__
         *  `Agent-Powered Reminder Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/reminder-agent-development-0000001493903928-V2>`__

      *  `Device Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_13device-management-0000001427744720-V2>`__

         *  `USB Service <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_1usb-service-0000001478181313-V2>`__
         *  `USB Service Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/usb-overview-0000001478341037-V2>`__
         *  `USB Service Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/usb-guidelines-0000001478061609-V2>`__
         *  `Location <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_2location-0000001544464029-V2>`__
         *  `Location Service Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/location-guidelines-0000001544384069-V2>`__
         *  `Sensor <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_3sensor-0000001427744724-V2>`__
         *  `Sensor Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/sensor-overview-0000001478181317-V2>`__
         *  `Sensor Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/sensor-guidelines-0000001478341041-V2>`__
         *  `Vibrator <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_4vibrator-0000001478061613-V2>`__
         *  `Vibrator Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/vibrator-overview-0000001477981097-V2>`__
         *  `Vibrator Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/vibrator-guidelines-0000001427902376-V2>`__
         *  `Multimodal Input <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_5multimodal-input-0000001428061648-V2>`__
         *  `Input Device Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/inputdevice-guidelines-0000001427584768-V2>`__
         *  `Mouse Pointer Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/pointerstyle-guidelines-0000001577863665-V2>`__
         *  `Stationary <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_7stationary-0000001493584144-V2>`__
         *  `Stationary Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/stationary-guidelines-0000001493424276-V2>`__

      *  `DFX <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_15dfx-0000001427584772-V2>`__

         *  `Development of Application Event Logging <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/hiappevent-guidelines-0000001427744732-V2>`__
         *  `Development of Performance Tracing <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/hitracemeter-guidelines-0000001478181325-V2>`__
         *  `Development of Distributed Call Chain Tracing <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/hitracechain-guidelines-0000001478341049-V2>`__
         *  `Error Management <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/2_4error-management-0000001478061621-V2>`__
         *  `Development of Error Manager <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/errormanager-guidelines-0000001477981105-V2>`__
         *  `Development of Application Recovery <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/apprecovery-guidelines-0000001427902384-V2>`__

      *  `Internationalization <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_16internationalization-0000001428061656-V2>`__

         *  `Internationalization Overview <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/international-overview-0000001427584776-V2>`__
         *  `intl Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/intl-guidelines-0000001427744736-V2>`__
         *  `i18n Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/i18n-guidelines-0000001478181329-V2>`__

      *  `Application Test <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_17application-test-0000001478341053-V2>`__

         *  `arkXtest User Guide <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/arkxtest-guidelines-0000001478061625-V2>`__

      *  `Native APIs <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/1_19native-apis-0000001493744056-V2>`__

         *  `Using Native APIs in Application Projects <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/napi-guidelines-0000001493903956-V2>`__
         *  `Drawing Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/drawing-guidelines-0000001544464057-V2>`__
         *  `Raw File Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/rawfile-guidelines-0000001544384097-V2>`__
         *  `Native Window Development <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/native-window-guidelines-0000001493584172-V2>`__
         *  `Using MindSpore Lite for Model Inference <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/mindspore-lite-guidelines-0000001493424304-V2>`__
         *  `Connecting the Neural Network Runtime to an AI Inference Framework <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/neural-network-runtime-guidelines-0000001544583973-V2>`__

   *  Hands-On Tutorials

      *  `Samples <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/samples-0000001162414961-V2>`__
      *  `Codelabs <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/codelabs-0000001141821381-V2>`__
      *  `Video Tutorials <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/video-tutorials-0000001121257792-V2>`__

   *  Term

      *  `Glossary <https://developer.huawei.com/consumer/en/doc/harmonyos-guides-V2/glossary-0000000000029587-V2>`__


/HarmonyOS 3.1 User Guide [CN]
==============================

   * 入门

      * `快速入门 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_1_u5feb_u901f_u5165_u95e8-0000001478340845-V2>`__

         * `开发准备 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-overview-0000001478061421-V2>`__
         * `构建第一个 ArkTS 应用（Stage模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-with-ets-stage-0000001477980905-V2>`__
         * `构建第一个 ArkTS 应用（FA模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-with-ets-fa-0000001427902184-V2>`__
         * `构建第一个 JS 应用（FA模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-with-js-fa-0000001428061452-V2>`__

      * `开发基础知识 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_1_u5f00_u53d1_u57fa_u7840_u77e5_u8bc6-0000001427584576-V2>`__

         * `应用程序包基础知识 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/94_u7528_u7a0b_u5e8f_u5305_u57fa_u7840_u77e5_u8bc6-0000001427744532-V2>`__

            * `应用程序包概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-package-overview-0000001478181125-V2>`__
            * `应用程序包结构 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_2_u5e94_u7528_u7a0b_u5e8f_u5305_u7ed3_u6784-0000001478340849-V2>`__

               * `Stage 模型应用程序包结构 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-package-structure-stage-0000001478061425-V2>`__
               * `FA 模型应用程序包结构 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-package-structure-fa-0000001477980909-V2>`__

            * `应用程序包多 HAP 机制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/u5e94_u7528_u7a0b_u5e8f_u5305_u591ahap_u673a_u5236-0000001428061456-V2>`__

               * `多 HAP 机制设计目标 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/multi-hap-objective-0000001427584580-V2>`__
               * `多 HAP 构建视图 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/multi-hap-build-view-0000001427744536-V2>`__
               * `多 HAP 的开发调试与发布部署流程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/multi-hap-release-deployment-0000001478181129-V2>`__
               * `多 HAP 使用规则 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/multi-hap-rules-0000001478340853-V2>`__
               * `多 HAP 运行机制及数据通信方式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/multi-hap-principles-0000001478061429-V2>`__

            * `应用程序包安装和卸载流程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-package-install-uninstall-0000001477980913-V2>`__
            * `应用程序包更新流程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-package-update-0000001544583889-V2>`__
            * `共享包 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_6_u5171_u4eab_u5305-0000001522832342-V2>`__

               * `共享包概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/shared-guide-0000001573152569-V2>`__
               * `HAR <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/har-package-0000001573432125-V2>`__
               * `HSP <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_3hsp-0000001523152174-V2>`__
               * `应用内HSP开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/in-app-hsp-0000001523312158-V2>`__

         * `应用配置文件（Stage模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/14d_u7f6e_u6587_u4ef6_uff08stage_u6a21_u578b_uff09-0000001427902192-V2>`__

            * `应用配置文件概述（Stage模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-configuration-file-overview-stage-0000001428061460-V2>`__
            * `app.json5 配置文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-configuration-file-0000001427584584-V2>`__
            * `module.json5 配置文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2>`__

         * `应用配置文件（FA模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/_u914d_u7f6e_u6587_u4ef6_uff08fa_u6a21_u578b_uff09-0000001478181133-V2>`__
            * `应用配置文件概述（FA模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-configuration-file-overview-fa-0000001478340857-V2>`__
            * `app 对象内部结构 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-structure-0000001478061433-V2>`__
            * `deviceConfig 内部结构 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/deviceconfig-structure-0000001477980917-V2>`__
            * `module 对象内部结构 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-structure-0000001427902196-V2>`__

      * `资源分类与访问 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/resource-categories-and-access-0000001711674888-V2>`__
      * `学习 ArkTS 语言 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-basics-0000001454809260-V2>`__

         * `初识 ArkTS 语言 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-get-started-0000001504769321-V2>`__
         * `基本语法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-basic-syntax-0000001504650057-V2>`__

            * `基本语法概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-basic-syntax-overview-0000001531611153-V2>`__
            * `声明式 UI 描述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-declarative-ui-description-0000001524416537-V2>`__
            * `自定义组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-custom-components-0000001473696674-V2>`__

               * `创建自定义组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-create-custom-components-0000001473537046-V2>`__
               * `页面和自定义组件生命周期 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-page-custom-components-lifecycle-0000001524296665-V2>`__

            * `@Builder 装饰器：自定义构建函数 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-builder-0000001524176981-V2>`__
            * `@BuilderParam 装饰器：引用 @Builder 函数 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-builderparam-0000001524416541-V2>`__
            * `@Styles 装饰器：定义组件重用样式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-style-0000001473856690-V2>`__
            * `@Extend 装饰器：定义扩展组件样式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-extend-0000001473696678-V2>`__
            * `stateStyles：多态样式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-statestyles-0000001482592098-V2>`__

         * `状态管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-state-management-0000001524177629-V2>`__

            * `状态管理概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-state-management-overview-0000001524537145-V2>`__
            * `管理组件拥有的状态 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-component-state-management-0000001524417205-V2>`__

               * `@State 装饰器：组件内状态 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-state-0000001474017162-V2>`__
               * `@Prop 装饰器：父子单向同步 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-prop-0000001473537702-V2>`__
               * `@Link 装饰器：父子双向同步 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-link-0000001524297305-V2>`__
               * `@Provide 和 @Consume 装饰器：与后代组件双向同步 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-provide-and-consume-0000001473857338-V2>`__
               * `@Observed 和 @ObjectLink 装饰器：嵌套类对象属性变化 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-observed-and-objectlink-0000001473697338-V2>`__

            * `管理应用拥有的状态 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-application-state-management-0000001524177633-V2>`__

               * `管理应用拥有的状态概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-application-state-management-overview-0000001529381989-V2>`__
               * `LocalStorage：页面级UI状态存储 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-localstorage-0000001524537149-V2>`__
               * `AppStorage：应用全局的UI状态存储 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-appstorage-0000001524417209-V2>`__
               * `PersistentStorage：持久化存储UI状态 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-persiststorage-0000001474017166-V2>`__
               * `Environment：设备环境查询 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-environment-0000001473537710-V2>`__

            * `其他状态管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-other-state-mgmt-functions-0000001524297309-V2>`__

               * `其他状态管理概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-other-state-mgmt-functions-overview-0000001530077309-V2>`__
               * `@Watch 装饰器：状态变量更改通知 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-watch-0000001473697342-V2>`__
               * `$$：内置组件双向同步语法糖 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-two-way-sync-0000001473857342-V2>`__

         * `渲染控制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-rendering-control-0000001504769325-V2>`__

            * `渲染控制概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-rendering-control-overview-0000001543911149-V2>`__
            * `if/else：条件渲染 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-rendering-control-ifelse-0000001524177637-V2>`__
            * `ForEach：循环渲染 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-rendering-control-foreach-0000001524537153-V2>`__
            * `LazyForEach：数据懒加载 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-rendering-control-lazyforeach-0000001524417213-V2>`__

   * 开发

      * `应用模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_1_u5e94_u7528_u6a21_u578b-0000001478061441-V2>`__

         * `应用模型概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_1_u5e94_u7528_u6a21_u578b_u6982_u8ff0-0000001477980925-V2>`__

            * `应用模型的构成要素 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-model-composition-0000001544384013-V2>`__
            * `应用模型解读 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-model-description-0000001493584092-V2>`__

         * `Stage 模型开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_2stage_u6a21_u578b_u5f00_u53d1_u6307_u5bfc-0000001427584596-V2>`__

            * `Stage 模型开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/stage-model-development-overview-0000001427744552-V2>`__
            * `Stage 模型应用组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_2stage_u6a21_u578b_u5e94_u7528_u7ec4_u4ef6-0000001478181145-V2>`__

               * `应用/组件级配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-component-configuration-stage-0000001478340869-V2>`__
               * `UIAbility 组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_2uiability_u7ec4_u4ef6-0000001478061445-V2>`__

                  * `UIAbility 组件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-overview-0000001477980929-V2>`__
                  * `UIAbility 组件生命周期 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-lifecycle-0000001427902208-V2>`__
                  * `UIAbility 组件启动模式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-launch-type-0000001428061476-V2>`__
                  * `UIAbility 组件基本用法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-usage-0000001427584600-V2>`__
                  * `UIAbility 组件与 UI 的数据同步 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-data-sync-with-ui-0000001427744556-V2>`__
                  * `UIAbility 组件间交互（设备内） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-intra-device-interaction-0000001478181149-V2>`__

               * `ExtensionAbility 组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_3extensionability_u7ec4_u4ef6-0000001478340873-V2>`__
               * `服务卡片开发指导（Stage模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/service-widget-development-stage-0000001485586036-V2>`__

                  * `服务卡片概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/service-widget-overview-0000001536226057-V2>`__
                  * `开发基于 ArkTS UI 的卡片 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-development-0000001535826257-V2>`__

                     * `ArkTS 卡片运行机制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-working-principles-0000001485485850-V2>`__
                     * `ArkTS 卡片相关模块 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-modules-0000001536006941-V2>`__
                     * `ArkTS 卡片开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-development-process-0000001553199757-V2>`__

                        * `创建一个 ArkTS 卡片 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-creation-0000001502173168-V2>`__
                        * `配置卡片的配置文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-configuration-0000001502333060-V2>`__
                        * `卡片生命周期管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-lifecycle-0000001553452901-V2>`__
                        * `开发卡片页面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-page-development-0000001553053073-V2>`__

                           * `卡片页面能力说明 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-page-overview-0000001553173049-V2>`__
                           * `卡片使用动效能力 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-page-animation-0000001553297285-V2>`__
                           * `卡片使用自定义绘制能力 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-page-custom-drawing-0000001502657486-V2>`__

                        * `开发卡片事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-event-development-0000001502333394-V2>`__

                           * `卡片事件能力说明 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-event-overview-0000001553069581-V2>`__
                           * `使用 router 事件跳转到指定 UIAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-event-router-0000001502352142-V2>`__
                           * `使用 call 事件拉起指定 UIAbility 到后台 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-event-call-0000001594314361-V2>`__
                           * `通过 message 事件刷新卡片内容 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-event-formextensionability-0000001502350018-V2>`__
                           * `通过 router或call 事件刷新卡片内容 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-event-uiability-0000001553309573-V2>`__

                        * `卡片数据交互 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-interaction-0000001502013288-V2>`__

                           * `卡片数据交互说明 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-interaction-overview-0000001507831960-V2>`__
                           * `定时刷新和定点刷新 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-update-by-time-0000001553079485-V2>`__
                           * `刷新本地图片和网络图片 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-image-update-0000001553199469-V2>`__
                           * `根据卡片状态刷新不同内容 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-widget-update-by-status-0000001502359814-V2>`__

                  * `开发基于 JS UI 的卡片 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-ui-widget-development-0000001535946225-V2>`__

               * `AbilityStage 组件容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/abilitystage-0000001427584604-V2>`__
               * `应用上下文 Context <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-context-stage-0000001427744560-V2>`__
               * `信息传递载体 Want <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_6_u4fe1_u606f_u4f20_u9012_u8f7d_u4f53want-0000001478181153-V2>`__

                  * `Want 概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/want-overview-0000001478340877-V2>`__
                  * `显式 Want 与隐式Want匹配规则 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/explicit-implicit-want-mappings-0000001478061453-V2>`__
                  * `常见 action 与 entities <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/actions-entities-0000001477980937-V2>`__
                  * `使用显式 Want 启动 Ability <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ability-startup-with-explicit-want-0000001427902216-V2>`__
                  * `使用隐式 Want 打开网址 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ability-startup-with-implicit-want-0000001428061484-V2>`__
                  * `应用间使用 Want 分享数据 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-share-via-want-0000001427584608-V2>`__

            * `进程模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_3_u8fdb_u7a0b_u95f4_u901a_u4fe1-0000001427902220-V2>`__

               * `进程模型概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/process-model-stage-0000001428061488-V2>`__
               * `公共事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_2_u516c_u5171_u4e8b_u4ef6-0000001427584612-V2>`__

                  * `公共事件简介 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/common-event-overview-0000001427744568-V2>`__
                  * `公共事件订阅 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/5_2_u516c_u5171_u4e8b_u4ef6_u8ba2_u9605-0000001478181161-V2>`__

                     * `动态订阅公共事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/common-event-subscription-0000001544583897-V2>`__
                     * `取消动态订阅公共事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/common-event-unsubscription-0000001493743984-V2>`__

                  * `公共事件发布 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/common-event-publish-0000001478340885-V2>`__

            * `线程模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_4_u7ebf_u7a0b_u95f4_u901a_u4fe1-0000001427902224-V2>`__

               * `线程模型概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/thread-model-stage-0000001428061492-V2>`__
               * `使用 Emitter 进行线程间通信 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/itc-with-emitter-0000001427584616-V2>`__
               * `使用 Worker 进行线程间通信 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/itc-with-worker-0000001427744572-V2>`__

         * `FA 模型开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_3fa_u6a21_u578b_u5f00_u53d1_u6307_u5bfc-0000001427902228-V2>`__

            * `FA 模型开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/fa-model-development-overview-0000001428061496-V2>`__
            * `FA 模型应用组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_2fa_u6a21_u578b_u5e94_u7528_u7ec4_u4ef6-0000001427584620-V2>`__

               * `应用/组件级配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-component-configuration-fa-0000001427744576-V2>`__
               * `PageAbility 组件开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_2pageability_u7ec4_u4ef6_u5f00_u53d1_u6307_u5bfc-0000001478181169-V2>`__

                  * `PageAbility 组件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/pageability-overview-0000001478340893-V2>`__
                  * `PageAbility 组件配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/pageability-configuration-0000001478061469-V2>`__
                  * `PageAbility 的生命周期 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/pageability-lifecycle-0000001477980953-V2>`__
                  * `PageAbility 的启动模式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/pageability-launch-type-0000001427902232-V2>`__
                  * `创建 PageAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/create-pageability-0000001428061500-V2>`__
                  * `启动本地 PageAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-local-pageability-0000001427584624-V2>`__
                  * `停止 PageAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/stop-pageability-0000001427744580-V2>`__
                  * `启动指定页面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-page-0000001478340897-V2>`__
                  * `窗口属性 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/window-properties-0000001478061473-V2>`__
                  * `申请授权 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/request-permissions-0000001477980957-V2>`__
                  * `跳转规则 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/redirection-rules-0000001427902236-V2>`__

               * `ServiceAbility 组件开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/serviceability_u7ec4_u4ef6_u5f00_u53d1_u6307_u5bfc-0000001428061504-V2>`__

                  * `ServiceAbility 组件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/serviceability-overview-0000001427584628-V2>`__
                  * `ServiceAbility 组件配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/serviceability-configuration-0000001427744584-V2>`__
                  * `ServiceAbility 的生命周期 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/serviceability-lifecycle-0000001478181177-V2>`__
                  * `创建 ServiceAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/create-serviceability-0000001478340901-V2>`__
                  * `启动 ServiceAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-serviceability-0000001478061477-V2>`__
                  * `连接 ServiceAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/connect-serviceability-0000001477980961-V2>`__

               * `DataAbility 组件开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_4dataability_u7ec4_u4ef6_u5f00_u53d1_u6307_u5bfc-0000001427902240-V2>`__

                  * `DataAbility 组件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/dataability-overview-0000001428061508-V2>`__
                  * `DataAbility 组件配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/dataability-configuration-0000001427584632-V2>`__
                  * `DataAbility 的生命周期 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/dataability-lifecycle-0000001427744588-V2>`__
                  * `创建 DataAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/create-dataability-0000001478181181-V2>`__
                  * `启动 DataAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-dataability-0000001478340905-V2>`__
                  * `访问 DataAbility <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/access-dataability-0000001478061481-V2>`__
                  * `DataAbility 权限控制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/dataability-permission-control-0000001477980965-V2>`__

               * `服务卡片开发指导（FA模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/widget-development-fa-0000001427902244-V2>`__
               * `FA 模型的 Context <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-context-fa-0000001428061512-V2>`__
               * `信息传递载体 Want <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/want-fa-0000001427584636-V2>`__

            * `进程模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_3_u8fdb_u7a0b_u95f4_u901a_u4fe1-1-0000001427744592-V2>`__

               * `进程模型概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/process-model-fa-0000001478181185-V2>`__
               * `公共事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/common-event-fa-0000001478340909-V2>`__

            * `线程模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_4_u7ebf_u7a0b_u95f4_u901a_u4fe1-1-0000001477980969-V2>`__

               * `线程模型概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/thread-model-fa-0000001427902248-V2>`__
               * `线程间通信 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/itc-fa-overview-0000001428061516-V2>`__

      * `UI 开发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_2ui_u5f00_u53d1-0000001478181205-V2>`__

         * `方舟开发框架（ArkUI）概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkui-overview-0000001532577181-V2>`__
         * `基于 ArkTS 的声明式开发范式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ts_u7684_u58f0_u660e_u5f0f_u5f00_u53d1_u8303_u5f0f-0000001478061505-V2>`__

            * `UI 开发（ArkTS声明式开发范式）概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-ui-development-overview-0000001438467628-V2>`__
            * `开发布局 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-0000001488989293-V2>`__

               * `布局概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-overview-0000001450866508-V2>`__
               * `构建布局 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-design-0000001500514245-V2>`__

                  * `线性布局（Row/Column） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-linear-0000001504125349-V2>`__
                  * `层叠布局（Stack） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-stack-layout-0000001454605342-V2>`__
                  * `弹性布局（Flex） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-flex-layout-0000001504525013-V2>`__
                  * `相对布局（RelativeContainer） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-relative-layout-0000001455042516-V2>`__
                  * `栅格布局（GridRow/GridCol） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-grid-layout-0000001454765270-V2>`__
                  * `媒体查询（mediaquery） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-media-query-0000001454445606-V2>`__
                  * `创建列表（List） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-create-list-0000001451074018-V2>`__
                  * `创建网格（Grid/GridItem） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-create-grid-0000001504486057-V2>`__
                  * `创建轮播（Swiper） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-create-looping-0000001454931830-V2>`__

               * `改善布局性能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-development-performance-boost-0000001450914106-V2>`__

            * `添加组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-components-0000001450754198-V2>`__

               * `添加常用组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-0000001500753905-V2>`__

                  * `按钮（Button） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-button-0000001450914110-V2>`__
                  * `单选框（Radio） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-radio-button-0000001500354973-V2>`__
                  * `切换按钮（Toggle） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-switch-0000001500633981-V2>`__
                  * `进度条（Progress） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-progress-indicator-0000001500514253-V2>`__
                  * `文本显示（Text/Span） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-text-display-0000001504880745-V2>`__
                  * `文本输入（TextInput/TextArea） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-text-input-0000001458538980-V2>`__
                  * `自定义弹窗（CustomDialog） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-custom-dialog-0000001450754206-V2>`__
                  * `视频播放（Video） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-video-player-0000001450594438-V2>`__
                  * `XComponent <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-components-xcomponent-0000001504835025-V2>`__

               * `添加气泡和菜单 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-popup-and-menu-components-0000001504715757-V2>`__

                  * `气泡提示（Popup） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-popup-and-menu-components-popup-0000001500753909-V2>`__
                  * `菜单（Menu） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-popup-and-menu-components-menu-0000001451074026-V2>`__

            * `设置页面路由和组件导航 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-routing-and-navigation-0000001453684972-V2>`__

               * `页面路由（router） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-routing-0000001503325125-V2>`__
               * `组件导航 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-navigation-0000001503125865-V2>`__

                  * `Navigation <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-navigation-navigation-0000001453365116-V2>`__
                  * `Tabs <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-navigation-tabs-0000001503284869-V2>`__

            * `显示图形 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-graphics-0000001450754210-V2>`__

               * `显示图片（Image） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-graphics-display-0000001451075174-V2>`__
               * `绘制几何图形（Shape） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-geometric-shape-drawing-0000001503484809-V2>`__
               * `使用画布绘制自定义图形（Canvas） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-drawing-customization-on-canvas-0000001453684976-V2>`__

            * `使用动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-animation-0000001500753913-V2>`__

               * `动画概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-animation-overview-0000001450755570-V2>`__
               * `页面内的动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-animation-within-page-0000001500635357-V2>`__

                  * `布局更新动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-layout-update-animation-0000001500356349-V2>`__
                  * `组件内转场动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-transition-animation-within-component-0000001500755277-V2>`__
                  * `弹簧曲线动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-spring-animation-0000001450915478-V2>`__

               * `页面间的动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-animation-between-pages-0000001455519000-V2>`__

                  * `放大缩小视图 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-zoom-animation-0000001500515609-V2>`__
                  * `页面转场动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-page-transition-animation-0000001450755574-V2>`__

            * `支持交互事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-event-support-0000001500636409-V2>`__

               * `交互事件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-event-overview-0000001450596850-V2>`__
               * `使用通用事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-events-0000001500756321-V2>`__

                  * `触屏事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-events-touch-screen-event-0000001451076450-V2>`__
                  * `键鼠事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-events-device-input-event-0000001529125201-V2>`__
                  * `焦点事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-common-events-focus-event-0000001455502044-V2>`__

               * `使用手势事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-gesture-events-0000001500636413-V2>`__

                  * `绑定手势方法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-gesture-events-binding-0000001529037393-V2>`__
                  * `单一手势 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-gesture-events-single-gesture-0000001450596854-V2>`__
                  * `组合手势 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-gesture-events-combined-gestures-0000001500756325-V2>`__

            * `性能提升的推荐方法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-ts-performance-improvement-recommendation-0000001477981001-V2>`__

         * `兼容JS的类Web开发范式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/17c_u5bb9js_u7684_u7c7bweb_u5f00_u53d1_u8303_u5f0f-0000001427902280-V2>`__

            * `概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-overview-0000001428061548-V2>`__
            * `框架说明 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_2_u6846_u67b6_u8bf4_u660e-0000001427584672-V2>`__

               * `文件组织 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-file-0000001427744628-V2>`__
               * `js 标签配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-js-tag-0000001478181221-V2>`__
               * `app.js <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-js-file-0000001478340945-V2>`__
               * `语法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_4_u8bed_u6cd5-0000001478061521-V2>`__

                  * `HML 语法参考 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-syntax-hml-0000001477981005-V2>`__
                  * `CSS 语法参考 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-syntax-css-0000001427902284-V2>`__
                  * `JS 语法参考 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-syntax-js-0000001428061552-V2>`__

               * `生命周期 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-lifecycle-0000001427584676-V2>`__
               * `资源限定与访问 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-resource-restriction-0000001427744632-V2>`__
               * `多语言支持 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/js-framework-multiple-languages-0000001478181225-V2>`__

            * `构建用户界面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_3_u6784_u5efa_u7528_u6237_u754c_u9762-0000001478340949-V2>`__

               * `组件介绍 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-component-0000001478061525-V2>`__
               * `构建布局 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_2_u6784_u5efa_u5e03_u5c40-0000001477981009-V2>`__

                  * `布局说明 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-layout-intro-0000001427902288-V2>`__
                  * `添加标题行和文本区域 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-layout-text-0000001428061556-V2>`__
                  * `添加图片区域 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-layout-image-0000001427584680-V2>`__
                  * `添加留言区域 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-layout-comment-0000001427744636-V2>`__
                  * `添加容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-layout-external-container-0000001478181229-V2>`__

               * `添加交互 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-interactions-0000001478340953-V2>`__
               * `使用动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-animation-0000001478061529-V2>`__
               * `手势事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-event-0000001477981013-V2>`__
               * `页面路由 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-building-ui-routes-0000001427902292-V2>`__

            * `常见组件开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/_4_u5e38_u89c1_u7ec4_u4ef6_u5f00_u53d1_u6307_u5bfc-0000001428061560-V2>`__

               * `容器组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_1_u5bb9_u5668_u7ec4_u4ef6-0000001427584684-V2>`__

                  * `list 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-list-0000001427744640-V2>`__
                  * `dialog 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-dialog-0000001478181233-V2>`__
                  * `form 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-form-0000001478340957-V2>`__
                  * `stepper 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-stepper-0000001478061533-V2>`__
                  * `tabs 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-component-tabs-0000001477981017-V2>`__
                  * `swiper 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-swiper-0000001427902296-V2>`__

               * `基础组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_2_u57fa_u7840_u7ec4_u4ef6-0000001428061564-V2>`__

                  * `text 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-text-0000001427584688-V2>`__
                  * `input 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-input-0000001427744644-V2>`__
                  * `button 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-button-0000001478181237-V2>`__
                  * `picker 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-picker-0000001478340961-V2>`__
                  * `image 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-images-0000001478061537-V2>`__
                  * `image-animator 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-image-animator-0000001477981021-V2>`__
                  * `rating 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-rating-0000001427902300-V2>`__
                  * `slider 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-slider-0000001428061568-V2>`__
                  * `chart 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-chart-0000001427584692-V2>`__
                  * `switch 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-switch-0000001427744648-V2>`__
                  * `toolbar 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-toolbar-0000001478181241-V2>`__
                  * `menu 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-menu-0000001478340965-V2>`__
                  * `marquee 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-marquee-0000001478061541-V2>`__
                  * `qrcode 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-qrcode-0000001477981025-V2>`__
                  * `search <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-search-0000001427902304-V2>`__

               * `Canvas开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_3canvas_u5f00_u53d1_u6307_u5bfc-0000001428061572-V2>`__

                  * `Canvas 对象 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-canvas-0000001427584696-V2>`__
                  * `CanvasRenderingContext2D 对象 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-canvasrenderingcontext2d-0000001427744652-V2>`__
                  * `Path2D 对象 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-path2d-0000001478181245-V2>`__
                  * `OffscreenCanvasRenderingContext2D 对象 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-offscreencanvas-0000001478340969-V2>`__

               * `栅格布局 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-grid-0000001478061545-V2>`__
               * `Svg 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_5svg_u5f00_u53d1_u6307_u5bfc-0000001477981029-V2>`__

                  * `基础知识 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-svg-overview-0000001427902308-V2>`__
                  * `绘制图形 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-svg-graphics-0000001428061576-V2>`__
                  * `绘制路径 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-svg-path-0000001427584700-V2>`__
                  * `绘制文本 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-components-svg-text-0000001427744656-V2>`__

            * `动效开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/3_5_u52a8_u6548_u5f00_u53d1_u6307_u5bfc-0000001478181249-V2>`__

               * `CSS 动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_1css_u52a8_u753b-0000001478340973-V2>`__

                  * `属性样式动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-animate-attribute-style-0000001478061549-V2>`__
                  * `transform 样式动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-animate-transform-0000001477981033-V2>`__
                  * `background-position 样式动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-animate-background-position-style-0000001427902312-V2>`__
                  * `svg 动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-animate-svg-0000001428061580-V2>`__

               * `JS 动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/4_2js_u52a8_u753b-0000001427584704-V2>`__

                  * `组件动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-animate-component-0000001427744660-V2>`__
                  * `插值器动画 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/5_2_u63d2_u503c_u5668_u52a8_u753b-0000001478181253-V2>`__

                     * `动画动效 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-animate-dynamic-effects-0000001478340977-V2>`__
                     * `动画帧 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-animate-frame-0000001478061553-V2>`__

            * `自定义组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ui-js-custom-components-0000001477981037-V2>`__

      * `Web <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/in-app-web-based-content-provisioning-0000001500514249-V2>`__

         * `Web 组件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-component-overview-0000001508249461-V2>`__
         * `使用 Web 组件加载页面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-page-loading-with-web-components-0000001458307700-V2>`__
         * `设置基本属性和事件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-basic-attribute-and-event-configuration-0000001458467496-V2>`__

            * `设置深色模式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-set-dark-mode-0000001492743806-V2>`__
            * `上传文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-file-upload-0000001543424721-V2>`__
            * `在新窗口中打开页面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-open-in-new-window-0000001544047837-V2>`__
            * `管理位置权限 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-geolocation-permission-0000001543967853-V2>`__

         * `在应用中使用前端页面 JavaScript <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-in-app-frontend-javascript-usage-0000001493555186-V2>`__

            * `应用侧调用前端页面函数 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-in-app-frontend-page-function-invoking-0000001493585684-V2>`__
            * `前端页面调用应用侧函数 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-in-page-app-function-invoking-0000001544585493-V2>`__
            * `建立应用侧与前端页面数据通道 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-app-page-data-channel-0000001493745576-V2>`__

         * `管理页面跳转及浏览记录导航 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-redirection-and-browsing-history-mgmt-0000001544195001-V2>`__
         * `管理 Cookie 及数据存储 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-cookie-and-data-storage-mgmt-0000001493715078-V2>`__
         * `自定义页面请求响应 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-resource-interception-request-mgmt-0000001493874990-V2>`__
         * `使用 Devtools 工具调试前端页面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-debugging-with-devtools-0000001508267425-V2>`__

      * `ArkTS 语言基础类库 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_3arkts_u8bed_u8a00_u57fa_u7840_u7c7b_u5e93-0000001632530086-V2>`__

         * `ArkTS 语言基础类库概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-commonlibrary-overview-0000001632849930-V2>`__
         * `并发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_2_u5e76_u53d1-0000001681369753-V2>`__

            * `并发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/concurrency-overview-0000001681489593-V2>`__
            * `使用异步并发能力进行开发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/65_u5e76_u53d1_u80fd_u529b_u8fdb_u884c_u5f00_u53d1-0000001632370250-V2>`__

               * `异步并发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/async-concurrency-overview-0000001632690002-V2>`__
               * `单次I/O任务开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/single-io-development-0000001681129701-V2>`__

            * `使用多线程并发能力进行开发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/0b_u5e76_u53d1_u80fd_u529b_u8fdb_u884c_u5f00_u53d1-0000001681209885-V2>`__

               * `多线程并发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/multi-thread-concurrency-overview-0000001632530090-V2>`__
               * `TaskPool 和 Worker 的对比 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/taskpool-vs-worker-0000001632849934-V2>`__
               * `@Concurrent 装饰器：校验并发函数 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-concurrent-0000001700975510-V2>`__
               * `CPU 密集型任务开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/cpu-intensive-task-development-0000001681369757-V2>`__
               * `I/O 密集型任务开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/io-intensive-task-development-0000001681489597-V2>`__
               * `同步任务开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/sync-task-development-0000001632370254-V2>`__

         * `容器类库 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_3_u5bb9_u5668_u7c7b_u5e93-0000001632690006-V2>`__

            * `容器类库概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/container-overview-0000001681129705-V2>`__
            * `线性容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/linear-container-0000001681209893-V2>`__
            * `非线性容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/nonlinear-container-0000001632530094-V2>`__

         * `XML 生成、解析与转换 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_4xml_u751f_u6210__u89e3_u6790_u4e0e_u8f6c_u6362-0000001632849942-V2>`__

            * `XML 概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/xml-overview-0000001681369765-V2>`__
            * `XML 生成 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/xml-generation-0000001681489601-V2>`__
            * `XML 解析 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/xml-parsing-0000001632370258-V2>`__
            * `XML 转换 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/xml-conversion-0000001632690010-V2>`__

      * `通知 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_3_u901a_u77e5-0000001427902316-V2>`__

         * `通知概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/notification-overview-0000001428061584-V2>`__
         * `发布通知 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_4_u53d1_u5e03_u901a_u77e5-0000001478181257-V2>`__

            * `发布基础类型通知 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/text-notification-0000001478340981-V2>`__
            * `发布进度条类型通知 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/progress-bar-notification-0000001478061557-V2>`__
            * `为通知添加行为意图 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/notification-with-wantagent-0000001477981041-V2>`__

      * `窗口管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_4_u7a97_u53e3_u7ba1_u7406-0000001427902320-V2>`__

         * `窗口开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/window-overview-0000001428061588-V2>`__
         * `管理应用窗口（Stage模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-window-stage-0000001427584712-V2>`__
         * `管理应用窗口（FA模型） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-window-fa-0000001427744668-V2>`__

      * `WebGL <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_5webgl-0000001493424248-V2>`__

         * `概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/webgl-overview-0000001544583917-V2>`__
         * `WebGL 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/webgl-guidelines-0000001544703845-V2>`__

      * `媒体 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_6_u5a92_u4f53-0000001427902324-V2>`__

         * `媒体应用开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/media-application-overview-0000001504617641-V2>`__
         * `音视频 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/av-development-0000001488909145-V2>`__

            * `音视频概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/av-overview-0000001488951497-V2>`__
            * `AVPlayer 和 AVRecorder <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/avplayer-avrecorder-overview-0000001454485268-V2>`__
            * `音频播放 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-playback-0000001504419069-V2>`__

               * `音频播放开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-playback-overview-0000001440210986-V2>`__
               * `使用 AVPlayer 开发音频播放功能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/using-avplayer-for-playback-0000001504424437-V2>`__
               * `使用 AudioRenderer 开发音频播放功能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/using-audiorenderer-for-playback-0000001504744697-V2>`__
               * `使用 OpenSL ES 开发音频播放功能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/using-opensl-es-for-playback-0000001454624692-V2>`__
               * `多音频播放的并发策略 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-playback-concurrency-0000001454472884-V2>`__
               * `播放音量管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/volume-management-0000001439734132-V2>`__
               * `音频播放流管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-playback-stream-management-0000001490130769-V2>`__
               * `音频输出设备管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-output-device-management-0000001489970285-V2>`__

            * `音频录制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-recording-0000001504739317-V2>`__

               * `音频录制开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-recording-overview-0000001440051718-V2>`__
               * `使用 AVRecorder 开发音频录制功能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/using-avrecorder-for-recording-0000001454944540-V2>`__
               * `使用 AudioCapturer 开发音频录制功能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/using-audiocapturer-for-recording-0000001454465856-V2>`__
               * `使用 OpenSL ES 开发音频录制功能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/using-opensl-es-for-recording-0000001504626369-V2>`__
               * `管理麦克风 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/mic-management-0000001505425677-V2>`__
               * `音频录制流管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-recording-stream-management-0000001455666176-V2>`__
               * `音频输入设备管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-input-device-management-0000001505745581-V2>`__

            * `音频通话 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-call-0000001454619312-V2>`__

               * `音频通话开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-call-overview-0000001439894100-V2>`__
               * `开发音频通话功能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/audio-call-development-0000001455598596-V2>`__

            * `视频播放 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/video-playback-0000001504538989-V2>`__

         * `图片 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-0000001488829077-V2>`__

            * `图片开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-overview-0000001495825661-V2>`__
            * `图片解码 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-decoding-0000001445831668-V2>`__
            * `图片处理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-processing-0000001448469206-V2>`__

               * `图像变换 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-transformation-0000001445671728-V2>`__
               * `位图操作 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-pixelmap-operation-0000001496071617-V2>`__

            * `图片编码 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-encoding-0000001445511788-V2>`__
            * `图片工具 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/image-tool-0000001505100593-V2>`__

      * `安全 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_7_u5b89_u5168-0000001427902336-V2>`__

         * `访问控制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_1_u8bbf_u95ee_u63a7_u5236-0000001544583929-V2>`__

            * `访问控制（权限）开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/accesstoken-overview-0000001544703857-V2>`__
            * `访问控制授权申请 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/accesstoken-guidelines-0000001493744016-V2>`__
            * `访问控制权限校验指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/permission-verify-guidelines-0000001493903916-V2>`__
            * `应用权限列表 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/permission-list-0000001544464017-V2>`__

         * `用户认证 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_2_u7528_u6237_u8ba4_u8bc1-0000001478061577-V2>`__

            * `用户认证开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/userauth-overview-0000001477981061-V2>`__
            * `用户认证开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/userauth-guidelines-0000001427902340-V2>`__

         * `密钥管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_3_u5bc6_u94a5_u7ba1_u7406-0000001428061608-V2>`__

            * `通用密钥库开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/huks-overview-0000001496554665-V2>`__
            * `通用密钥库开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/huks-guidelines-0000001496954177-V2>`__
            * `通用密钥库密码算法规格 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/huks-appendix-0000001446834210-V2>`__

         * `加解密算法库框架 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/_4_u52a0_u89e3_u5bc6_u7b97_u6cd5_u5e93_u6846_u67b6-0000001493424264-V2>`__

            * `加解密算法库框架概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/cryptoframework-overview-0000001544583933-V2>`__
            * `加解密算法库框架开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/cryptoframework-guidelines-0000001544703861-V2>`__

         * `证书 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_5_u8bc1_u4e66-0000001453819540-V2>`__

            * `证书概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/cert-overview-0000001503452709-V2>`__
            * `证书开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/cert-guidelines-0000001503692477-V2>`__

      * `网络与连接 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_8_u7f51_u7edc_u4e0e_u8fde_u63a5-0000001427744692-V2>`__

         * `网络管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_1_u7f51_u7edc_u7ba1_u7406-0000001478181289-V2>`__

            * `网络管理开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/net-mgmt-overview-0000001478341009-V2>`__
            * `HTTP 数据请求 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/http-request-0000001478061585-V2>`__
            * `WebSocket 连接 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/websocket-connection-0000001477981069-V2>`__
            * `Socket 连接 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/socket-connection-0000001427902348-V2>`__

         * `IPC 与 RPC 通信 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_2ipc_u4e0erpc_u901a_u4fe1-0000001428061616-V2>`__

            * `IPC 与 RPC 通信概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ipc-rpc-overview-0000001427584740-V2>`__
            * `IPC 与 RPC 通信开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ipc-rpc-development-guideline-0000001427744696-V2>`__
            * `远端状态订阅开发实例 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/subscribe-remote-state-0000001478181293-V2>`__

      * `电话服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_9_u7535_u8bdd_u670d_u52a1-0000001478341013-V2>`__

         * `电话服务开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/telephony-overview-0000001478061589-V2>`__
         * `跳转拨号界面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/jumping-to-the-dial-screen-0000001477981073-V2>`__
         * `获取当前蜂窝网络信号信息 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/cellular-network-signal-info-0000001427902352-V2>`__

      * `数据管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_10_u6570_u636e_u7ba1_u7406-0000001428061620-V2>`__

         * `数据管理概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-mgmt-overview-0000001475034472-V2>`__
         * `应用数据持久化 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-data-persistence-0000001505632753-V2>`__

            * `应用数据持久化概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-data-persistence-overview-0000001505513497-V2>`__
            * `通过用户首选项实现数据持久化 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-persistence-by-preferences-0000001505432513-V2>`__
            * `通过键值型数据库实现数据持久化 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-persistence-by-kv-store-0000001455673012-V2>`__
            * `通过关系型数据库实现数据持久化 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-persistence-by-rdb-store-0000001505752421-V2>`__

         * `数据可靠性与安全性 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-reliability-security-0000001505769913-V2>`__

            * `数据可靠性与安全性概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-reliability-security-overview-0000001505535625-V2>`__
            * `数据库备份与恢复 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-backup-and-restore-0000001529958149-V2>`__
            * `数据库加密 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data-encryption-0000001479278180-V2>`__
            * `基于设备分类和数据分级的访问控制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/access-control-by-device-and-data-level-0000001456174754-V2>`__

      * `文件管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_11_u6587_u4ef6_u7ba1_u7406-0000001428061632-V2>`__

         * `文件管理概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/file-management-overview-0000001505679633-V2>`__
         * `应用文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-file-0000001456039578-V2>`__

            * `应用文件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-file-overview-0000001455719906-V2>`__
            * `应用沙箱目录 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-sandbox-directory-0000001491863498-V2>`__
            * `应用文件访问与管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-file-access-mgmt-0000001455879674-V2>`__

               * `应用文件访问 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-file-access-0000001544302293-V2>`__
               * `应用文件上传下载 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-file-upload-download-0000001493702450-V2>`__
               * `应用及文件系统空间统计 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-fs-space-statistics-0000001544093353-V2>`__

            * `向应用沙箱推送文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/send-file-to-app-sandbox-0000001505799317-V2>`__
            * `应用文件分享 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/share-app-file-0000001456039582-V2>`__

         * `用户文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/user-file-0000001455719898-V2>`__

            * `用户文件概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/user-file-overview-0000001505560345-V2>`__
            * `选择与保存用户文件（FilePicker） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/select-and-save-user-file-0000001536597717-V2>`__

               * `选择用户文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/select-user-file-0000001536397757-V2>`__
               * `保存用户文件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/save-user-file-0000001485877710-V2>`__

         * `分布式文件系统 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/distributed-fs-0000001455719914-V2>`__

            * `分布式文件系统概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/distributed-fs-overview-0000001505560361-V2>`__
            * `设置分布式文件数据等级 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/set-security-label-0000001476420826-V2>`__
            * `跨设备文件访问 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/file-access-across-devices-0000001505479413-V2>`__

      * `后台任务（Background Task）管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-dev-guide-0000001614624468-V2>`__

         * `后台任务总体概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/background-task-overview-0000001614944868-V2>`__
         * `短时任务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/transient-task-0000001759591245-V2>`__
         * `长时任务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/continuous-task-0000001711672320-V2>`__
         * `延迟任务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/work-scheduler-0000001711831844-V2>`__
         * `代理提醒 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agent-powered-reminder-0000001663585481-V2>`__

      * `设备管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_13_u8bbe_u5907_u7ba1_u7406-0000001427744720-V2>`__

         * `USB 服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_1usb_u670d_u52a1-0000001478181313-V2>`__

            * `USB 服务开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/usb-overview-0000001478341037-V2>`__
            * `USB 服务开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/usb-guidelines-0000001478061609-V2>`__

         * `位置服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_2_u4f4d_u7f6e_u670d_u52a1-0000001544464029-V2>`__

            * `位置服务开发指南 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/location-guidelines-0000001544384069-V2>`__

         * `传感器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_3_u4f20_u611f_u5668-0000001427744724-V2>`__

            * `传感器开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/sensor-overview-0000001478181317-V2>`__
            * `传感器开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/sensor-guidelines-0000001478341041-V2>`__

         * `振动 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_4_u632f_u52a8-0000001478061613-V2>`__

            * `Vibrator 开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/vibrator-overview-0000001477981097-V2>`__
            * `Vibrator 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/vibrator-guidelines-0000001427902376-V2>`__

         * `多模输入 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_5_u591a_u6a21_u8f93_u5165-0000001428061648-V2>`__

            * `输入设备开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/inputdevice-guidelines-0000001427584768-V2>`__
            * `鼠标光标开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/pointerstyle-guidelines-0000001577863665-V2>`__

         * `设备状态 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_7_u8bbe_u5907_u72b6_u6001-0000001493584144-V2>`__

            * `Stationary 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/stationary-guidelines-0000001493424276-V2>`__

      * `DFX <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_15dfx-0000001427584772-V2>`__

         * `应用事件打点开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hiappevent-guidelines-0000001427744732-V2>`__
         * `性能打点跟踪开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hitracemeter-guidelines-0000001478181325-V2>`__
         * `分布式跟踪开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hitracechain-guidelines-0000001478341049-V2>`__
         * `错误管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/2_4_u9519_u8bef_u7ba1_u7406-0000001478061621-V2>`__

            * `错误管理开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/errormanager-guidelines-0000001477981105-V2>`__
            * `应用恢复开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/apprecovery-guidelines-0000001427902384-V2>`__

      * `国际化 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_16_u56fd_u9645_u5316-0000001428061656-V2>`__

         * `国际化开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/international-overview-0000001427584776-V2>`__
         * `Intl 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/intl-guidelines-0000001427744736-V2>`__
         * `I18n 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/i18n-guidelines-0000001478181329-V2>`__

      * `应用测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_17_u5e94_u7528_u6d4b_u8bd5-0000001478341053-V2>`__

         * `自动化测试框架使用指南 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkxtest-guidelines-0000001478061625-V2>`__

      * `Native API 相关指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/1_20native-api_u76f8_u5173_u6307_u5bfc-0000001493744056-V2>`__

         * `Native API 在应用工程中的使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/napi-guidelines-0000001493903956-V2>`__
         * `Drawing 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/drawing-guidelines-0000001544464057-V2>`__
         * `Rawfile 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/rawfile-guidelines-0000001544384097-V2>`__
         * `NativeWindow 开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/native-window-guidelines-0000001493584172-V2>`__
         * `使用 MindSpore Lite 引擎进行模型推理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/mindspore-lite-guidelines-0000001493424304-V2>`__
         * `Neural Network Runtime 对接AI推理框架开发指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/neural-network-runtime-guidelines-0000001544583973-V2>`__

   * 工具

      * `DevEco Studio 使用指南 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/devecostudio_userguide-0000001054619202-V2>`__

         * `工具简介 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/deveco_overview-0000001053582387-V2>`__
         * `快速开始 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/environment-0000001053662422-V2>`__

            * `搭建开发环境流程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/installation_process-0000001071425528-V2>`__
            * `下载与安装软件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/software_install-0000001053582415-V2>`__
            * `配置开发环境 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/environment_config-0000001052902427-V2>`__
            * `创建和运行 Hello World <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hello_world-0000001054516888-V2>`__

         * `工程管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/project-0000001053462435-V2>`__

            * `工程介绍 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/project_overview-0000001053822398-V2>`__
            * `工程模板和开发语言介绍 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/device_template-0000001053702407-V2>`__
            * `创建一个新的工程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/create_new_project-0000001053342414-V2>`__
            * `Gradle 工程适配为 Hvigor 工程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/gradle-history-project-adapt-0000001555871289-V2>`__
            * `导入 Sample 工程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-import-sample-0000001117813004-V2>`__
            * `添加/删除 Module <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/add_new_module-0000001053223741-V2>`__

         * `应用/服务开发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/code_edit-0000001053023688-V2>`__

            * `编辑器使用技巧 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/editer_overview-0000001053502418-V2>`__
            * `在模块中添加 Ability <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/add_new_ability-0000001053183674-V2>`__
            * `添加 JS Component 和 Page <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/add_new_page-0000001053303705-V2>`__
            * `开发及引用共享包 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/creating_har_api8-0000001341502357-V2>`__

               * `开发及引用静态共享包（API 9） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/creating_har_api9-0000001518082393-V2>`__
               * `开发及引用静态共享包（API 8） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/creating_har_api8-0000001494155892-V2>`__
               * `开发及引用静态共享包（API 4-7） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/creating_har-0000001059626724-V2>`__
               * `开发及引用动态共享包 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hsp-0000001521396322-V2>`__

            * `定义 HarmonyOS IDL 接口 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/idl_interface-0000001054639494-V2>`__
            * `创建服务卡片 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_service_widget-0000001078566997-V2>`__
            * `使用预览器查看应用/服务效果 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/previewer-0000001054328973-V2>`__
            * `代码 Code Linter 检查 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hos-code-linter-0000001363071681-V2>`__
            * `代码 Quick Fix 快速修复 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/quick-fix-0000001487075254-V2>`__
            * `低代码开发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-0000001430221372-V2>`__

               * `低代码开发概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-overview-0000001480179573-V2>`__
               * `使用低代码开发应用或服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-app-service-0000001480299549-V2>`__
               * `使用低代码开发服务卡片 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-atomic-service-0000001480059773-V2>`__
               * `低代码开发 Demo 示例 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-demo-0000001480340085-V2>`__
               * `导入 Sketch 文件生成界面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-sketch-0000001430540120-V2>`__
               * `低代码开发中使用业务组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-agccomponent-0000001485762200-V2>`__
               * `低代码开发中使用自定义组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-custom-0000001430380856-V2>`__
               * `使用数据模型和连接器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-serverless-0000001486074468-V2>`__
               * `低代码多语言支持及屏幕适配 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-low-code-language-screen-0000001430223232-V2>`__

            * `端云一体化开发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddevguide-0000001489595393-V2>`__

               * `简介 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-overview-0000001489475661-V2>`__
               * `创建端云一体化开发工程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-createproject-0000001439596128-V2>`__
               * `开发云工程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-develop-0000001439119292-V2>`__

                  * `开发云函数 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-cloudfunctions-0000001489715925-V2>`__
                  * `开发云数据库 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-clouddb-0000001489835445-V2>`__

               * `部署云工程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-deploy-0000001489595397-V2>`__
               * `端云一体化组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-component-0000001439279256-V2>`__

                  * `概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-componentoverview-0000001489636421-V2>`__
                  * `登录组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-logincomponent-0000001489516697-V2>`__

               * `AGC应用管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-agcapp-0000001439436876-V2>`__
               * `优秀案例 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-harmonyos-clouddev-cases-0000001732818949-V2>`__

         * `编译构建 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/code_build-0000001053662426-V2>`__

            * `编译构建概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/build_overview-0000001055075201-V2>`__
            * `配置编译构建信息 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/build_config-0000001052902431-V2>`__
            * `默认开启模块化编译模式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/esmodule-compile-0000001502160768-V2>`__
            * `开启 AOT 编译模式 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/aot_build-0000001474611502-V2>`__
            * `配置应用的依赖 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/configuring-dependencies-0000001545614945-V2>`__
            * `HAP 唯一性校验逻辑 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/verification_rule-0000001406748378-V2>`__
            * `构建闭源HAR <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/build_har-0000001495135030-V2>`__
            * `定制多目标构建产物 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/customized-multi-targets-and-products-0000001430013853-V2>`__
            * `通过命令行方式构建应用或服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/command-line-building-app-0000001553461729-V2>`__

               * `命令行构建应用/服务概述 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/command-line-building-app-hap-overview-0000001554750373-V2>`__
               * `命令行构建应用/服务（API 8-9） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/command-line-building-app-hap-hvigor-0000001553061909-V2>`__
               * `通过命令行方式构建应用或服务（API 4-7） <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/command-line-building-app-hap-gradle-0000001193655754-V2>`__

         * `应用/服务运行 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/running-app-0000001495169810-V2>`__

            * `运行HarmonyOS应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hos-running-app-0000001054595227-V2>`__

               * `使用本地真机运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/device_run-0000001053502422-V2>`__

                  * `Phone 和 Tablet 中运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/run_phone_tablat-0000001064774652-V2>`__
                  * `Car 中运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/run_car-0000001057517151-V2>`__
                  * `TV 中运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/run_tv-0000001053662428-V2>`__
                  * `Wearable 中运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/run_smartwatch-0000001052902433-V2>`__
                  * `Lite Wearable 中运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/run_fitnesswatch-0000001054134240-V2>`__
                  * `Smart Vision 设备中运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/run_smart_vision-0000001058268313-V2>`__
                  * `Router 中运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-run-router-0000001108306270-V2>`__

               * `使用模拟器运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/run_simulator-0000001053303709-V2>`__
               * `使用远程真机运行应用/服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-remote-real-device-0000001167977777-V2>`__

            * `运行 OpenHarmony 应用/服务运行 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ohos-running-app-0000001494848238-V2>`__

         * `应用/服务调试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/debug_app-0000001053702413-V2>`__

            * `调试 HarmonyOS 应用 / 服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hos-debugging-app-0000001115604787-V2>`__

               * `为应用 / 服务进行签名 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/signing-0000001587684945-V2>`__
               * `使用真机进行调试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_debug_device-0000001053822404-V2>`__
               * `使用模拟器进行调试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_debug_emulator-0000001115721921-V2>`__

            * `调试 OpenHarmony 应用 / 服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ohos-debugging-app-0000001545729889-V2>`__
            * `变量可视化调试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/data_visualization-0000001064877812-V2>`__
            * `堆栈可视化调试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/stack_visualization-0000001317294185-V2>`__
            * `Release 应用堆栈解析 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/release-app-stack-analysis-0000001421224074-V2>`__
            * `C/C++ 时光调试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/time-travel-debug-0000001438715156-V2>`__
            * `Hot Reload <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hot_reload-0000001527628941-V2>`__
            * `跨设备应用 / 服务调试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/corss_device_debug-0000001064753150-V2>`__
            * `打印日志 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-debug-hilog-0000001172459337-V2>`__
            * `C/C++内存错误检测 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/asan-0000001545528013-V2>`__

         * `性能分析 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/profiling-app-0000001436192041-V2>`__

            * `HarmonyOS 应用性能分析 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/profiling-hos-app-0000001553050197-V2>`__

               * `Profiler 性能分析 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-profiler-0000001230362863-V2>`__

                  * `Profiler 性能分析器介绍 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_profiler_introduce-0000001193577970-V2>`__
                  * `分析 HarmonyOS 应用 / 服务的 CPU 活动性能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_profiler_cpu-0000001193737956-V2>`__
                  * `分析 HarmonyOS 应用 / 服务的内存使用 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_profiler_memory-0000001238217951-V2>`__
                  * `分析 HarmonyOS 应用 / 服务网络活动 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_profiler_network-0000001193258028-V2>`__
                  * `分析 HarmonyOS 应用 / 服务能耗 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_profiler_energy-0000001193417988-V2>`__

               * `HiTrace日志跟踪定位分析 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/hitrace-0000001064598156-V2>`__

            * `OpenHarmony应用性能分析 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/profiling-ohos-app-0000001502010384-V2>`__

               * `Profiler性能分析器介绍 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/profiler-introduce-0000001501850508-V2>`__
               * `分析 OpenHarmony 应用 / 服务的 CPU 活动性能 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/profiler-cpu-0000001553290077-V2>`__
               * `分析 OpenHarmony 应用 / 服务的内存使用 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/profiler-memory-0000001553450009-V2>`__

         * `应用 / 服务测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_app_test-0000001096387767-V2>`__

            * `测试框架 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/harmonyos_jnit_jsunit-0000001092459608-V2>`__
            * `原子化服务体检 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-application-scoring-tool-0000001151205902-V2>`__

         * `HarmonyOS应用 / 服务发布 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/publish_app-0000001053223745-V2>`__
         * `命令行工具 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/command_line_tools-0000001124588437-V2>`__

            * `bytrace使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-bytrace-0000001125636225-V2>`__
            * `SDK管理使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-sdkmgr2-0000001494690814-V2>`__

               * `sdkmgr使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-sdkmgr-0000001110390078-V2>`__
               * `ohsdkmgr使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-ohsdkmgr-0000001545647965-V2>`__
               * `SDK管理命令行工具高级配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/sdkmgr-advanced-configuration-0000001502282862-V2>`__

            * `codelinter使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-codelinter-0000001541475149-V2>`__
            * `ohpm使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-ohpm-0000001490235312-V2>`__
            * `hdc使用指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-hdc-0000001237908229-V2>`__
            * `hvigor命令行 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-command-line-hvigor-0000001553317645-V2>`__

         * `附录 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/appendix-0000001530420761-V2>`__

            * `代码检查规则表 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/codelinter-rule-0000001530930013-V2>`__
            * `通过 DevEco Studio 编译和上传软件包 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/upload-project-0000001575253198-V2>`__
            * `DevEco Studio配置参数列表 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/configuration-parameter-0000001502283970-V2>`__

      * `DevEco Service使用指南 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/deveco_services-0000001071813705-V2>`__

         * `业务介绍 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_devecoservices_overview-0000001089540019-V2>`__
         * `DevEco低代码 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-0000001601512213-V2>`__

            * `简介 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-overview-0000001601377205-V2>`__
            * `版本更新说明 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-version-change-history-0000001607032210-V2>`__
            * `开发准备 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-prepare-0000001550433102-V2>`__
            * `开发元服务 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-develop-service-0000001601377221-V2>`__

               * `开发界面介绍 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-gui-introduction-0000001601791961-V2>`__
               * `变量管理 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-variable-management-0000001550592598-V2>`__
               * `组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-component-0000001662290873-V2>`__

                  * `组件通用信息 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-component-general-info-0000001733542937-V2>`__

                     * `组件通用属性 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-component-general-property-0000001733333069-V2>`__

                        * `尺寸设置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-component-prop-size-0000001685464050-V2>`__
                        * `布局约束 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-component-prop-layout-constraints-0000001685464054-V2>`__
                        * `ForEach：循环渲染 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-component-prop-foreach-render-0000001685378326-V2>`__

                  * `基础组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-basics-component-0000001710505457-V2>`__

                     * `评分条组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-rating-component-0000001663000370-V2>`__
                     * `单选框组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-radio-component-0000001663160082-V2>`__
                     * `菜单组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-menu-component-0000001710959981-V2>`__
                     * `富文本组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-rich-text-component-0000001711079973-V2>`__
                     * `文本域组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-textarea-component-0000001663000374-V2>`__
                     * `堆叠容器组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-stack-component-0000001685203044-V2>`__
                     * `弹性容器组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-flex-component-0000001733441829-V2>`__
                     * `列表组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-list-component-0000001685464066-V2>`__
                     * `滚动容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-scroll-component-0000001733702825-V2>`__
                     * `页签组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-tabcontent-component-0000001685623798-V2>`__
                     * `横向容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-row-component-0000001733542969-V2>`__
                     * `垂直容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-column-component-0000001685464070-V2>`__
                     * `导航组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-navigation-component-0000001733702837-V2>`__
                     * `文本组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-text-component-0000001685623810-V2>`__
                     * `网页容器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-web-component-0000001733702861-V2>`__

                  * `业务组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-service-component-0000001710625461-V2>`__

                     * `支付组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-pay-component-0000001613890862-V2>`__
                     * `登录组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-login-component-0000001664199553-V2>`__
                     * `日历组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-calendar-component-0000001615439716-V2>`__
                     * `音频组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-audio-component-0000001640564516-V2>`__

                  * `自定义组件 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-custom-component-0000001657383417-V2>`__

               * `区块 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-blocks-0000001663166170-V2>`__
               * `事件方法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-event-method-0000001726997773-V2>`__

                  * `页面交互方法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-page-interaction-method-0000001678998682-V2>`__
                  * `变量赋值 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-variable-assignment-0000001730032293-V2>`__
                  * `自定义方法 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-custom-method-0000001554817998-V2>`__
                  * `方法链式调用 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-method-chain-call-0000001727157697-V2>`__

               * `图片素材库 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-picture-material-library-0000001601632013-V2>`__
               * `服务卡片开发 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-service-card-develope-0000001608143796-V2>`__

            * `应用配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-configure-certificates-0000001603850713-V2>`__

               * `证书配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-configure-certificate-0000001608552336-V2>`__
               * `图标配置 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-configure-icon-0000001657512605-V2>`__
               * `访问控制 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-configure-user-0000001769641205-V2>`__

            * `自测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-self-test-0000001603570729-V2>`__
            * `应用发布 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-publish-0000001550752298-V2>`__

               * `应用信息填写 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-enter-information-0000001559029140-V2>`__
               * `应用推送发布 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/lowcode-package-formal-0000001550912286-V2>`__

            * `平台操作指导 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-platform-0000001601377229-V2>`__

               * `应用 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-platfrom-manageapp-0000001550433126-V2>`__

                  * `创建应用 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-platfrom-createapp-0000001601791965-V2>`__
                  * `维护应用 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-platfrom-maintanceapp-0000001550752302-V2>`__

               * `数据模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-platfrom-managedatamodel-0000001550912290-V2>`__

                  * `新建数据模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-datamodel-create-0000001601512241-V2>`__
                  * `管理数据 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-datamodel-data-0000001601377233-V2>`__
                  * `维护数据模型 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-datamodel-maintenance-0000001550433134-V2>`__

               * `连接器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-manageconnector-0000001601791969-V2>`__

                  * `新建连接器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-connector-create-0000001550592606-V2>`__
                  * `维护连接器 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-connector-maintance-0000001601632025-V2>`__

               * `模板中心 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-managetemplate-0000001550752310-V2>`__
               * `区块与页面 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-blocks-pages-0000001679454150-V2>`__
               * `用户权限 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-user-permissions-0000001707776365-V2>`__

                  * `角色与权限 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-roles-permissions-0000001707737113-V2>`__

            * `常见问题 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agc-lowcode-faq-0000001694892053-V2>`__

         * `HarmonyOS 应用安全测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/safety_test-0000001071094191-V2>`__

            * `漏洞检测 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_vulnerability_test-0000001077085228-V2>`__
            * `隐私测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_privacy_test-0000001089552709-V2>`__

         * `HarmonyOS 应用云测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/cloud_test-0000001085386353-V2>`__

            * `兼容性测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_compatibility_test-0000001076817960-V2>`__
            * `稳定性测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_stability_test-0000001076977574-V2>`__
            * `性能测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide_performance_test-0000001085632739-V2>`__
            * `功耗测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-consumption-test-0000001149926832-V2>`__
            * `UX测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-ux-test-0000001196180501-V2>`__

         * `HarmonyOS应用远程真机测试 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/ide-remote-real-device-test-0000001196868531-V2>`__

   * 示例教程

      * `示例代码 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/samples-0000001162414961-V2>`__
      * `Codelabs <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/codelabs-0000001443855957-V2>`__
      * `视频教程 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/video-tutorials-0000001443535745-V2>`__

   * 术语

      * `术语 <https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/glossary-0000000000029587-V2>`__


/Video Tutorials
================

.. container::

   The following video tutorials are provided to help you better
   understand HarmonyOS.

   .. container:: \"tablenoborder\"

      .. list-table::
         :header-rows: 1

         - 

            - Topic
            - Description
         - 

            - `What Is HarmonyOS <https://developer.huawei.com/consumer/en/training/course/video/101615349133316008>`__
            - Illustrates what HarmonyOS is and its features.
         - 

            - `HarmonyOS System Architecture <https://developer.huawei.com/consumer/en/training/course/video/101615349392300009>`__
            - Shows the HarmonyOS system architecture and principles of
               the Feature Ability (FA) and Particle Ability (PA).


/AppGallery Connect 应用分发
===========================

* AppGallery Connect帮助中心

   * 使用入门

      * `概述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-overview-0000001100246618>`__
      * `版本更新说明 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-releasenotes-0000001150208779>`__
      * `开始使用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-getstarted-0000001100316670>`__
      * `总体流程 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-process-0000001146716611>`__
      * `信息中心 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-information-center-0000001142182302>`__

   * 管理开发者帐号

      * `帐号与权限概述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-account-overview-0000001146516647>`__
      * `管理开发者帐号信息 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-accountinfo-0000001108468138>`__
      * `管理团队帐号 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-manageaccount-0000001099996700>`__
      * `角色与权限列表 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-rolepermission-0000001155345429>`__

   * 创建项目和应用

      * `项目和应用介绍 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-projectintro-0000001146614683>`__
      * `创建项目 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-createproject-0000001100334664>`__
      * `创建应用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-createapp-0000001146718717>`__
      * `数据处理位置 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-datalocation-0000001160439813>`__
      * `数据处理位置策略 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-datalocation-strategy-0000001283213602>`__
      * `查看应用基本信息 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694>`__
      * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/agc-help-createfaq-0000001156662603>`__

   * 开发应用

      * `概述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-overview-0000001099998800>`__
      * `(可选）配置应用签名证书指纹 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-signature-info-0000001628566748>`__
      * `集成服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-integrate-service-0000001146438653>`__
      * `调试API <https://developer.huawei.com/consumer/cn/doc/app/agc-help-debugg-api-0000001346861040>`__
   
   * `互动中心 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-interaction-center-0000001146518763>`__

   * 测试应用

      * `概述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-overview-0000001107794814>`__
      * `沙盒测试 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-testaccount-0000001146438651>`__
      * `云测试 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloud-test-0000001156844797>`__
      * `云调试 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloud-debug-0000001110524914>`__
      * `接入检测 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-self-check-0000001100158786>`__
      * `开放式测试 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-open-test-0000001100318776>`__
      * `A/B测试 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-ab-0000001146599979>`__

   * 发布应用

      * `概述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-overview-0000001272395372>`__
      * `配置应用基本信息 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-configure-appinfo-0000001100086630>`__
      * `发布应用（APK） <https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseapkrpk-0000001106463276>`__
      * `发布应用（RPK） <https://developer.huawei.com/consumer/cn/doc/app/agc-help--release-fastapp-0000001099836868>`__
      * `发布应用（AppBundle） <https://developer.huawei.com/consumer/cn/doc/app/agc-help-releasebundle-0000001100316672>`__
      * `发布应用（Windows） <https://developer.huawei.com/consumer/cn/doc/app/agc-help-pcapp-0000001146516651>`__

      * 多 APK 发布

         * `发布支持单设备的多APK应用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-multiapk-singledevice-0000001099854864>`__
         * `多APK版本发布场景下配置GMS/HMS依赖 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-gmshmsdependency-0000001110334192>`__

      * `配置沉浸式详情页 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-immersive-0000001146734601>`__
      * `软件包解析错误说明 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-androiderror-0000001652151797>`__
      * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/agc-help-releasefaq-0000001110342644>`__

   * 升级应用

      * `更新在架应用详情 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-updateappinfo-0000001100156682>`__
      * `升级应用版本 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-update-version-0000001146436549>`__
      * `分阶段发布 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-phased-release-0000001099836872>`__

   * `应用分析报表数据 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-anaiyze-data-0000001146598795>`__

      * `页面总览和概览 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-interface-overview-0000001146438655>`__
      * `分发报表 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-discard-report-0000001100158788>`__
      * `运营报表 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-run-report-0000001100318778>`__
      * `质量报表 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-quality-report-0000001146718721>`__
      * `高级分析 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-hign-analyze-0000001099838972>`__
      * `画像分析 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-pic-analysis-0000001154544228>`__
      * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/agc-help-analyzedata-faq-0000001100319956>`__

   * `元服务分析报表数据 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-anaiyze-data-fa-0000001722042417>`__

      * `页面总览和概览 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-interface-overview-fa-0000001673923156>`__
      * `分发报表 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-discard-report-fa-0000001674082848>`__
      * `画像分析 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-pic-analysis-fa-0000001721962309>`__
      * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/agc-help-analyzedata-faq-fa-0000001796292969>`__

   * 维护应用

      * `催促/撤销审核 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-cancel-review-0000001110334194>`__
      * `管理应用系列 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-manage-app-series-0000001773503840>`__
      * `下架应用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-removeapp-0000001100316676>`__
      * `回退版本 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-rollback-0000001146534647>`__
      * `删除应用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-deleteapp-0000001146716617>`__
      * `应用认领 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-claiming-0000001146518767>`__
      * `应用转移 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-transferapp-0000001099998802>`__
      * `查看应用信用记录 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-credit-record-0000001146614685>`__
      * `查看版本历史记录 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-version-history-0000001100334666>`__

   * 运营应用

      * 用户运营

         * `互动评论 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-interaction-comments-0000001146598797>`__
         * `开发者的话 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-developers-message-0000001146438657>`__
         * `社区管理 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-community-operation-0000001118528918>`__
         * `用户反馈管理 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-users-feedback-0000001100158790>`__
         * `行业风向标 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-industry-standard-0000001159033885>`__
         * `短信召回 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-recall-uninstall-users-0000001192278762>`__

      * 内容运营

         * `内容推荐业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-content-introduction-0000001146718723>`__
         * `《匠心奖》栏目介绍及申请指南 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-introduce-guide-0000001099838974>`__
         * `《每日精选》栏目介绍及申请指南 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-introduce-explore-0000001146518771>`__
         * `《探索》栏目内容编辑上线指南 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-explore-guide-0000001161995567>`__
         * `《开发者说》栏目介绍及申请指南 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-developers-column-0000001099998806>`__
         * `《重磅更新》栏目 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-renew-program-0000001165488645>`__
         * `《CG鉴赏家》栏目 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-eight-program-0000001118688808>`__
         * `营销素材管理 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-marketing-material-0000001226780703>`__

      * 活动运营

         * `礼包管理 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-gifts-management-0000001146519949>`__
         * `活动管理 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-management-0000001771900480>`__
            * `概述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-overview-0000001818900149>`__
            * `预约有奖 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-reservation-0000001818905093>`__
            * `安装有奖 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-install-0000001818745117>`__
            * `登录有奖 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-login-0000001772065076>`__
            * `提升付费 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-increase-payment-0000001771905416>`__
            * `流失召回 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-loss-recall-0000001818905097>`__
            * `查看活动效果 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-results-0000001818745121>`__
            * `管理已创建活动 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-management-0000001772065080>`__
            * `参数说明 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-param-0000001771905420>`__
            * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-faq-0000001818905101>`__

      * 商品管理

         * `图说商品管理 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-product-pic-0000001281544506>`__
         * `创建应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-product-0000001099854866>`__
         * `修改应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-modify-product-0000001146814541>`__
         * `设置自动刷新价格 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-refreshprice-0000001334949257>`__
         * `激活/失效应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-deactivate-product-0000001146734603>`__
         * `删除/还原应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-deleting-product-0000001146534649>`__
         * `管理订阅组 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-manage-subscription-group-0000001100174674>`__
         * `管理商品营销 <https://developer.huawei.com/consumer/cn/doc/app/managing-product-marketing-0000001100014696>`__
         * `换算规则描述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-conversion-rule-description-0000001146614687>`__
         * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/agc-help-productmanagement-faq-0000001164315015>`__

   * HarmonyOS应用/元服务

      * `概述 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-introduction-0000001172299745>`__
      * `调试HarmonyOS应用/元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-debugapp-0000001172419675>`__
      * `发布HarmonyOS应用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseapp-0000001126380068>`__
      * `发布元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001126539888>`__
      * `独立发布元服务并关联Android应用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-associateservicewithapp-0000001194301766>`__
      * `发布组织内部应用 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-internalrelease-0000001756878768>`__
      * `托管隐私声明 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-privacystatementguide-0000001757041969>`__

         * `服务入口 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-privacystatement-0000001645256448>`__
         * `配置隐私声明 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-configprivacystatement-0000001709163018>`__
         * `使用隐私声明 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-useprivacystatement-0000001709322502>`__
         * `配置用户协议 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-configuseragreement-0000001721967034>`__

      * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-faq-0000001142220338>`__
      * `软件包解析错误说明 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoserror-0000001651912985>`__

   * DevEco低代码（Web版）开发元服务

      * `文档导览 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-knowledge-map-0000001670622021>`__
      * `业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-overview-0000001622182222>`__
      * `服务定价与订购 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-pricing-0000001693906473>`__

      * 开发准备

         * `注册帐号 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-register-0000001670661997>`__
         * `开通付费服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-pay-service-0000001670502021>`__
         * `申请加入白名单 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-applywhitelist-0000001622342118>`__
         * `（可选）申请华为帐号获取手机号码权限 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-obtain-number-0000001670382145>`__
         * `创建项目 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-createproject-0000001622022386>`__
         * `开通低代码服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-enableservice-0000001622182226>`__

      * 基于空模板开发元服务

         * `创建元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-create-empty-fa-0000001632860296>`__
         * `界面布局 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-dev-empty-fa-0000001721137073>`__
         * `使用数据模型 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-use-datamodel-0000001681380085>`__
         * `使用连接器 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-use-connector-0000001681499949>`__

      * 基于景区模板开发元服务

         * `创建元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-createatomicservice-0000001670622025>`__

         * 基础开发

            * `适配模板 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-adapt-template-0000001699011249>`__
            * `调整页面布局 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-layout-0000001622022390>`__
            * `在对应布局配置应用数据 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-config-data-0000001670622029>`__
            * `构建新的低码页面 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-new-page-0000001622182230>`__

         * `开发图片功能 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-template-picture-0000001622502098>`__
         * `集成认证服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-access-auth-0000001622182234>`__
         * `集成华为支付 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-access-iap-0000001622502102>`__

      * 基于会务模板开发元服务

         * `创建元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-creatfa-meeting-0000001692194166>`__

         * 基础开发

            * `适配模板 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-adapt-template-meeting-0000001692353882>`__
            * `调整页面布局 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-layout-meeting-0000001740152809>`__
            * `在对应布局配置应用数据 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-cfgdata-meeting-0000001692194170>`__

      * 打包测试

         * `签名 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-debug-sign-0000001670662013>`__
         * `配置快照图片和元服务图标 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-snapshot-icon-0000001622578982>`__
         * `配置服务卡片 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-config-fa-card-0000001627678500>`__
         * `本地真机调试 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-debug-0000001670502037>`__

      * 发布上架

         * `发布数据模型 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-publicdatamodel-0000001670382161>`__
         * `发布连接器 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-public-connector-0000001622022406>`__
         * `发布前自检 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-checklist-0000001670622041>`__
         * `签名 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-release-sign-0000001622182242>`__
         * `（可选）配置签名证书指纹 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-config-fingerprints-0000001622502110>`__
         * `（可选）修改支付配置 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-web-config-pay-0000001652590190>`__
         * `开放式测试 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-open-test-0000001670662017>`__
         * `上架正式版本 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-launch-formal-0000001670502041>`__

      * `分发元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-distribution-0000001622342138>`__

   * DevEco低代码（桌面版）开发元服务

      * `文档导览 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-knowledge-map-0000001666950617>`__

      * 开发准备

         * `注册帐号 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-register-0000001598815109>`__
         * `开通付费服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-pay-service-0000001616864432>`__
         * `申请加入白名单 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-applywhitelist-0000001598720405>`__
         * `（可选）申请华为帐号获取手机号码权限 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-obtain-number-0000001617393498>`__
         * `搭建开发环境 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-buildenvironment-0000001548015666>`__
         * `创建项目 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-createproject-0000001548175398>`__
         * `创建元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-createatomicservice-0000001548335370>`__
         * `开通低代码服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-enableservice-0000001598935085>`__

      * `服务定价与订购 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-pricing-0000001697929953>`__

      * 基于景区模板开发元服务

         * `模板简介 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-templateoverview-0000001548015654>`__
         * `创建工程 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-import-0000001547856186>`__

         * 基础开发

            * `调整页面布局 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-layout-0000001658350241>`__
            * `在对应布局配置应用数据 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-config-data-0000001658469989>`__
            * `构建新的低码页面 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-new-page-0000001609390382>`__

         * `开发图片功能 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-picture-0000001548015670>`__
         * `开发导览功能 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-guide-0000001548175402>`__
         * `集成第三方能力 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-third-capability-0000001609554382>`__
         * `开发服务卡片 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-fa-card-0000001609714374>`__
         * `复用高码页面 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-use-highcodepage-0000001658234597>`__
         * `复用H5页面 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-use-h5page-0000001658554297>`__
         * `开发隐私声明功能 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-privacy-0000001609234886>`__
         * `开发导航功能 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-navigation-0000001658354553>`__
         * `集成认证服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-auth-enable-service-0000001547856198>`__
         * `集成华为支付 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-access-iap-0000001618594194>`__
         * `集成推送服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-access-push-0000001618754090>`__
         * `开发视频功能 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-video-0000001598720409>`__
         * `开发支付功能 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-pay-0000001548335374>`__
         * `配置数据模型 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-datamodel-0000001599015329>`__
         * `实时预览图片功能开发 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-livepreviewpicture-0000001549651014>`__
         * `（可选）跨域设置 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-origin-0000001548789104>`__

      * 打包测试

         * `签名 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-sign-0000001608991658>`__
         * `本地真机调试 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-debug-0000001599015349>`__

      * 发布上架

         * `发布数据模型 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-template-publicdatamodel-0000001598815097>`__
         * `发布连接器 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-public-connector-0000001615041896>`__
         * `发布前自检 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-checklist-0000001616944044>`__
         * `打包正式版本 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-package-formal-0000001598742385>`__
         * `（可选）配置签名证书指纹 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-config-fingerprints-0000001665663861>`__
         * `开放式测试 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-open-test-0000001665823693>`__
         * `上架正式版本 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-launch-formal-0000001547878202>`__

      * 平台操作指导

         * 管理数据模型

            * `新建数据模型 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-datamodel-create-0000001598815121>`__
            * `管理数据 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-datamodel-data-0000001598720413>`__
            * `维护数据模型 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-datamodel-maintenance-0000001548184346>`__

         * 管理连接器

            * `新建连接器 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-connector-create-0000001548335378>`__
            * `维护连接器 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-connector-maintance-0000001548015674>`__

      * `分发元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-lowcode-distribution-0000001617103896>`__

   * `技术支持 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-tech-support-0000001115632176>`__

   * 附录

      * `AppGallery Connect服务白皮书 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-service-white-paper-0000001156658451>`__

      * AGC 运营活动一览

         * 沙龙：成都站

            * `AppGallery Connect 提升游戏生产 & 经营效率 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-promote-efficience-0000001110338492>`__
            * `游戏内容型分发 突破流量困境 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-break-difficulties-0000001156658453>`__
            * `快游戏： 新生态，角逐流量新赛道 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-new-track-0000001110178592>`__
            * `Huawei Gaming+服务,致力于打造高品质游戏 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-make-quality-0000001156538481>`__

         * HDC分论坛课件

            * `Serverless端云一体化开发，简化HarmonyOS开发 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-development-services-0000001156658455>`__
            * `Serverless服务实践，加速企业数字化转型 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-distributing-increase-0000001110178594>`__
            * `成功案例分享 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-success-stories-0000001156538483>`__

         * AppGallery Connect 线上直播课件

            * `华为应用市场及AppGallery Connect概况 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-connection-overview-0000001156658457>`__

            * 应用分发类

               * `一站式分发服务助力用户增长 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-users-increase-0000001156538485>`__
               * `多格式包体分发助力应用安装成功 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-more-formats-0000001110338498>`__

            * 应用构建类

               * `认证服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-services-0000001110178598>`__
               * `云函数 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloud-functions-0000001156538487>`__
               * `云数据库 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloud-db-0000001110338500>`__
               * `云存储 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloud-storage-0000001156658461>`__
               * `云托管 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloud-hosting-0000001110178600>`__

            * 应用质量类

               * `崩溃/云测试/云调试 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-crash-questions-0000001110338502>`__
               * `性能管理 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-performance-management-0000001156658463>`__

            * 应用增长类

               * `精细化运营促规模增长 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-operationscale-grow-0000001156538491>`__
               * `运营服务及数据分析 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-operationsdata-analyze-0000001110338504>`__

            * `Connect API <https://developer.huawei.com/consumer/cn/doc/app/agc-help-connectapi-overview-0000001110178604>`__

      * `商品管理国家/地区、语言、币种列表 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-supported-countries-overview-0000001146718725>`__
      * `应用素材规范 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-material-requirement-0000001146534651>`__
      * `手动签名方式调试 HarmonyOS 应用/元服务 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-debugapp-manual-0000001177608893>`__
      * `手动签名方式调试可信应用（TA） <https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-debug-ta-0000001586459100>`__
      * `谷歌文件转换小工具 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-conversion-tool-0000001164315135>`__
      * `Windows 应用建议规范 <https://developer.huawei.com/consumer/cn/doc/app/agc-help-pc-practice-0000001203950281>`__

      * CPS应用合作开发指南

         * `合作介绍 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-002-0000001292830690>`__
         * `接入要求 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-003-0000001345750457>`__

         * 使用入门-AppGallery Connect配置

            * `注册成为开发者 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-005-0000001292990326>`__
            * `创建应用 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-006-0000001292670822>`__
            * `生成签名证书指纹 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-007-0000001345430721>`__
            * `配置签名证书指纹 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-008-0000001292510906>`__
            * `打开服务开关 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-009-0000001292830694>`__

         * 使用入门-集成HMS Core SDK

            * `添加当前应用的 AppGallery Connect 配置文件 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-011-0000001345830581>`__
            * `配置 HMS Core SDK 的 Maven 仓地址 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-012-0000001345670049>`__
            * `添加编译依赖 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-013-0000001292990330>`__
            * `多语言设置 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-014-0000001292670826>`__

         * `使用入门-配置混淆脚本 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-015-0000001345430725>`__
         * `华为帐号登录 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-016-0000001292670842>`__

         * 应用内支付

            * `支付 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-018-0000001292510930>`__
            * `退款 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-019-0000001292830718>`__

         * 测试与上架

            * `创建测试帐号 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-021-0000001345830601>`__
            * `商品支付测试 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-022-0000001345670073>`__
            * `自检工具 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-023-0000001292990354>`__
            * `上架前 Checklist <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-024-0000001292670850>`__
            * `了解上架规则 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-025-0000001345430749>`__
            * `提交上架申请 <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-026-0000001292510934>`__
         * `其他QA <https://developer.huawei.com/consumer/cn/doc/app/cps-tmp-027-0000001292830722>`__

* 应用市场政策中心

   * `业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/50101>`__
   * `审核政策 <https://developer.huawei.com/consumer/cn/doc/app/50000>`__

      * `应用审核指南 <https://developer.huawei.com/consumer/cn/doc/app/50104>`__

         * `概述 <https://developer.huawei.com/consumer/cn/doc/app/50104-overview>`__
         * `1. 应用信息 <https://developer.huawei.com/consumer/cn/doc/app/50104-01>`__
         * `2. 应用安全 <https://developer.huawei.com/consumer/cn/doc/app/50104-02>`__
         * `3. 应用功能 <https://developer.huawei.com/consumer/cn/doc/app/50104-03>`__
         * `4. 应用内容 <https://developer.huawei.com/consumer/cn/doc/app/50104-04>`__
         * `5. 应用广告 <https://developer.huawei.com/consumer/cn/doc/app/50104-05>`__
         * `6. 应用付费 <https://developer.huawei.com/consumer/cn/doc/app/50104-06>`__
         * `7. 用户隐私 <https://developer.huawei.com/consumer/cn/doc/app/50104-07>`__
         * `8. 未成年人保护 <https://developer.huawei.com/consumer/cn/doc/app/50104-08>`__
         * `9. 知识产权 <https://developer.huawei.com/consumer/cn/doc/app/50104-09>`__
         * `10. 应用资质 <https://developer.huawei.com/consumer/cn/doc/app/50104-10>`__
         * `11. 开发者行为 <https://developer.huawei.com/consumer/cn/doc/app/50104-11>`__
         * `12. 部分类型应用注意事项 <https://developer.huawei.com/consumer/cn/doc/app/50115>`__
         * `13. 不收录类型 <https://developer.huawei.com/consumer/cn/doc/app/50117>`__

      * `元服务审核指南 <https://developer.huawei.com/consumer/cn/doc/app/50129>`__

         * `概述 <https://developer.huawei.com/consumer/cn/doc/app/50129-overview>`__
         * `1. 元服务信息 <https://developer.huawei.com/consumer/cn/doc/app/50129-01>`__
         * `2. 元服务安全 <https://developer.huawei.com/consumer/cn/doc/app/50129-02>`__
         * `3. 元服务功能 <https://developer.huawei.com/consumer/cn/doc/app/50129-03>`__
         * `4. 元服务内容 <https://developer.huawei.com/consumer/cn/doc/app/50129-04>`__
         * `5. 元服务广告 <https://developer.huawei.com/consumer/cn/doc/app/50129-05>`__
         * `6. 元服务付费 <https://developer.huawei.com/consumer/cn/doc/app/50129-06>`__
         * `7. 用户隐私 <https://developer.huawei.com/consumer/cn/doc/app/50129-07>`__
         * `8. 未成年人保护 <https://developer.huawei.com/consumer/cn/doc/app/50129-08>`__
         * `9. 知识产权 <https://developer.huawei.com/consumer/cn/doc/app/50129-09>`__
         * `10. 开发者行为 <https://developer.huawei.com/consumer/cn/doc/app/50129-10>`__

      * `应用分类示例 <https://developer.huawei.com/consumer/cn/doc/app/50103>`__
      * `应用资质审核要求 <https://developer.huawei.com/consumer/cn/doc/app/80301>`__
      * `应用年龄分级标准 <https://developer.huawei.com/consumer/cn/doc/app/50125>`__
      * `开发者账号与应用处理原因及措施 <https://developer.huawei.com/consumer/cn/doc/app/50109>`__
      * `应用侵权投诉处理指引 <https://developer.huawei.com/consumer/cn/doc/app/50120>`__
      * `应用审核相关讲解课程 <https://developer.huawei.com/consumer/cn/doc/app/50121>`__
      * `应用审核FAQ <https://developer.huawei.com/consumer/cn/doc/app/50106>`__
      * `游戏审核FAQ <https://developer.huawei.com/consumer/cn/doc/app/50118>`__
      * `元服务审核FAQ <https://developer.huawei.com/consumer/cn/doc/app/50150>`__
      * `应用资质FAQ <https://developer.huawei.com/consumer/cn/doc/app/50111>`__

         * `概述 <https://developer.huawei.com/consumer/cn/doc/app/50111-overview>`__
         * `资质提交入口 <https://developer.huawei.com/consumer/cn/doc/app/50111-01>`__
         * `ICP备案/ICP证 <https://developer.huawei.com/consumer/cn/doc/app/50111-03>`__
         * `计算机软件著作权证书 <https://developer.huawei.com/consumer/cn/doc/app/50111-02>`__
         * `《安全评估报告》 <https://developer.huawei.com/consumer/cn/doc/app/50108>`__
         * `《网络文化经营许可证》 <https://developer.huawei.com/consumer/cn/doc/app/50111-04>`__
         * `《医疗机构执业许可证》 <https://developer.huawei.com/consumer/cn/doc/app/50111-05>`__
         * `《测绘资质证书》 <https://developer.huawei.com/consumer/cn/doc/app/50111-06>`__
         * `《互联网信息服务算法备案》 <https://developer.huawei.com/consumer/cn/doc/app/50111-07>`__
         * `《人力资源服务许可证》及机构登记备案 <https://developer.huawei.com/consumer/cn/doc/app/50111-08>`__

      * `应用年龄分级问卷FAQ <https://developer.huawei.com/consumer/cn/doc/app/50142>`__
      * `应用隐私政策链接提交及内容规范参考FAQ <https://developer.huawei.com/consumer/cn/doc/app/50128>`__
      * `APP常见个人信息保护问题FAQ <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq>`__

         * `概述 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-overview>`__
         * `1. 违规收集个人信息 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-01>`__
         * `2. 超范围收集个人信息 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-02>`__
         * `3. 违规使用个人信息 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-03>`__
         * `4. 定向推送行为 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-04>`__
         * `5. 权限索取行为 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-05>`__
         * `6. 自启动&关联启动 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-06>`__
         * `7. 下载分发行为 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-07>`__
         * `8. 违规获取个人信息 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-08>`__
         * `9. 账号注销常见问题 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-11>`__
         * `10. 开发者需提供真实有效的信息 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-09>`__
         * `11. 个人信息保护合规性检测服务介绍 <https://developer.huawei.com/consumer/cn/doc/app/FAQ-faq-10>`__

      * `APP备案FAQ <https://developer.huawei.com/consumer/cn/doc/app/50130>`__

   * `监管政策与审核策略动态 <https://developer.huawei.com/consumer/cn/doc/app/news>`__

      * `2023年 <https://developer.huawei.com/consumer/cn/doc/app/2023>`__

         * `2023年01月 <https://developer.huawei.com/consumer/cn/doc/app/50131>`__
         * `2023年02月 <https://developer.huawei.com/consumer/cn/doc/app/50132>`__
         * `2023年03月 <https://developer.huawei.com/consumer/cn/doc/app/50133>`__
         * `2023年04月 <https://developer.huawei.com/consumer/cn/doc/app/50134>`__
         * `2023年05月 <https://developer.huawei.com/consumer/cn/doc/app/50135>`__
         * `2023年06月 <https://developer.huawei.com/consumer/cn/doc/app/50136>`__
         * `2023年07月 <https://developer.huawei.com/consumer/cn/doc/app/50137>`__
         * `2023年08月 <https://developer.huawei.com/consumer/cn/doc/app/50138>`__
         * `2023年09月 <https://developer.huawei.com/consumer/cn/doc/app/50139>`__
         * `2023年10月 <https://developer.huawei.com/consumer/cn/doc/app/50143>`__
         * `2023年11月 <https://developer.huawei.com/consumer/cn/doc/app/50144>`__
         * `2023年12月 <https://developer.huawei.com/consumer/cn/doc/app/50145>`__

      * `2024年01月 <https://developer.huawei.com/consumer/cn/doc/app/50146>`__
      * `2024年02月 <https://developer.huawei.com/consumer/cn/doc/app/50147>`__
      * `2024年03月 <https://developer.huawei.com/consumer/cn/doc/app/50148>`__

   * `AppGallery隐私标签介绍 <https://developer.huawei.com/consumer/cn/doc/app/privacy-label>`__
   * `华为绿色应用 <https://developer.huawei.com/consumer/cn/doc/app/help-greenapp>`__

      * `绿色应用认证指南 <https://developer.huawei.com/consumer/cn/doc/app/50124>`__
      * `绿色应用检测认证FAQ <https://developer.huawei.com/consumer/cn/doc/app/help-greenapp-faq>`__
      * `《软件绿色联盟应用体验标准5.0》关键信息和华为解读 <https://developer.huawei.com/consumer/cn/doc/app/50123>`__

   * `类平板设备说明 <https://developer.huawei.com/consumer/cn/doc/app/TabletDevice>`__
   * `华为终端质量检测和安全审查标准 <https://developer.huawei.com/consumer/cn/doc/app/50113>`__
   * `华为终端三方管家质量标准 <https://developer.huawei.com/consumer/cn/doc/app/50116>`__
   * `协议 <https://developer.huawei.com/consumer/cn/doc/app/signing-guide>`__

      * `AppGallery Connect 协议签署指南 <https://developer.huawei.com/consumer/cn/doc/app/signing-guide>`__
      * `AppGallery Connect 协议包 <https://developer.huawei.com/consumer/cn/doc/app/20208>`__
      * `华为应用市场联运服务协议 <https://developer.huawei.com/consumer/cn/doc/app/20204>`__
      * ` 华为APIs使用协议 <https://developer.huawei.com/consumer/cn/doc/app/20209>`__
      * `华为AppGallery Connect隐私及安全声明 <https://developer.huawei.com/consumer/cn/doc/app/86741055>`__
      * `AppGallery Connect数据处理附录 <https://developer.huawei.com/consumer/cn/doc/app/20215>`__
      * `数据处理信息 <https://developer.huawei.com/consumer/cn/doc/app/76411906>`__
      * `华为软件技术有限公司的子数据处理者 <https://developer.huawei.com/consumer/cn/doc/app/hwsubprocessor>`__
      * `Aspeigel SE的子数据处理者 <https://developer.huawei.com/consumer/cn/doc/app/aspgsubprocessor>`__
      * `华为服务(香港)有限公司的子数据处理者 <https://developer.huawei.com/consumer/cn/doc/app/hksubprocessor>`__
      * `AppGallery Connect 数据中心地址 <https://developer.huawei.com/consumer/cn/doc/app/20211>`__
      * `华为AppGallery Connect服务协议 <https://developer.huawei.com/consumer/cn/doc/app/20214>`__
      * `华为分析服务协议 <https://developer.huawei.com/consumer/cn/doc/app/20212>`__
      * `华为分析数据保护协议 <https://developer.huawei.com/consumer/cn/doc/app/Controller>`__
      * `华为推送服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/20213>`__
      * `华为地图服务协议 <https://developer.huawei.com/consumer/cn/doc/app/64077474>`__
      * `华为Nearby服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/64141665>`__
      * `华为Health kit服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/70941808>`__
      * `华为钱包Wallet Kit服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/77379566>`__
      * `华为机器学习服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/jiqixuexi>`__
      * `华为动态标签管理服务协议 <https://developer.huawei.com/consumer/cn/doc/app/5555>`__
      * `华为预测服务协议 <https://developer.huawei.com/consumer/cn/doc/app/agc_Prediction>`__
      * `AppGallery Connect付费服务协议 <https://developer.huawei.com/consumer/cn/doc/app/PaidService>`__
      * `华为定位服务协议 <https://developer.huawei.com/consumer/cn/doc/app/Locationkit>`__
      * `华为推送用户增长服务协议 <https://developer.huawei.com/consumer/cn/doc/app/0326>`__
      * `关于华为AppGallery Connect与隐私的声明 <https://developer.huawei.com/consumer/cn/doc/app/AGCPrivacyStatement>`__
      * `华为开发者基础服务协议 <https://developer.huawei.com/consumer/cn/doc/app/HWDBServiceAgreement>`__
      * `Huawei AppGallery Connect 应用签名服务协议 <https://developer.huawei.com/consumer/cn/doc/app/20210812>`__
      * `华为智能运营服务协议 <https://developer.huawei.com/consumer/cn/doc/app/Intelligentoperation>`__
      * `WisePlay服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/1145>`__
      * `华为开发者HiAI服务协议 <https://developer.huawei.com/consumer/cn/doc/app/1008>`__
      * `Business Connect服务协议 <https://developer.huawei.com/consumer/cn/doc/app/1196>`__
      * `华为开发者音频内容合作协议 <https://developer.huawei.com/consumer/cn/doc/app/1110>`__
      * `华为手语服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/1245>`__
      * `华为天气服务协议 <https://developer.huawei.com/consumer/cn/doc/app/1249>`__
      * `华为国内短信服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/1190>`__
      * `华为主题服务协议 <https://developer.huawei.com/consumer/cn/doc/app/1001>`__
      * `华为3D建模服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/1253>`__
      * `华为HarmonyOS服务开放平台合作协议 <https://developer.huawei.com/consumer/cn/doc/app/1019>`__
      * `华为视频编辑服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/1277>`__
      * `华为融合搜索服务使用协议 <https://developer.huawei.com/consumer/cn/doc/app/1282>`__

* 游戏中心

   * `游戏中心介绍 <https://developer.huawei.com/consumer/cn/doc/app/game-center-introduction-0000001193266912>`__

   * 游戏立项

      * `问卷服务 <https://developer.huawei.com/consumer/cn/doc/app/game-center-questionnaire-0000001194144428>`__
      * `行业风向标 <https://developer.huawei.com/consumer/cn/doc/app/game-center-wind-indicator-0000001241425507>`__

   * 游戏接入

      * `准备工作 <https://developer.huawei.com/consumer/cn/doc/app/game-center-preparation-work-0000001194305246>`__
      * `APK游戏接入 <https://developer.huawei.com/consumer/cn/doc/app/game-center-access-view-0000001239185215>`__
      * `RPK游戏接入 <https://developer.huawei.com/consumer/cn/doc/app/game-center-fast-access-0000001194465244>`__
      * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/game-center-access-faq-0000001239505183>`__

   * `游戏预约 <https://developer.huawei.com/consumer/cn/doc/app/game-center-pre-order-0000001239342333>`__

   * 游戏推广

      * `游戏联合推广 <https://developer.huawei.com/consumer/cn/doc/app/game-center-union-promotion-0000001194145270>`__
      * `晨星计划 <https://developer.huawei.com/consumer/cn/doc/app/game-center-sharing-proportion-0000001281833236>`__
      * `智能信息 <https://developer.huawei.com/consumer/cn/doc/app/game-center-intelligence-message-0000001372361253>`__
      * `营销素材管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-marketing-material-0000001193982454>`__
      * `游戏中心服务推广 <https://developer.huawei.com/consumer/cn/doc/app/game-center-service-promotion-0000001790247249>`__

   * 游戏测试

      * `A/B测试 <https://developer.huawei.com/consumer/cn/doc/app/game-center-abtest-0000001239182355>`__
      * `游戏内测 <https://developer.huawei.com/consumer/cn/doc/app/game-center-early-access-0000001194302390>`__
      * `先锋测试 <https://developer.huawei.com/consumer/cn/doc/app/game-center-pioneer-test-0000001194462384>`__

   * `游戏首发 <https://developer.huawei.com/consumer/cn/doc/app/game-center-first-applyfor-0000001239502317>`__

   * 游戏上架

      * `上架前自检 <https://developer.huawei.com/consumer/cn/doc/app/game-center-self-inspection-0000001195761346>`__
      * `APK游戏上架 <https://developer.huawei.com/consumer/cn/doc/app/game-center-releasing-apkgame-0000001194879116>`__
      * `RPK游戏上架 <https://developer.huawei.com/consumer/cn/doc/app/game-center-releasing-prkgame-0000001195039108>`__

   * 游戏升级

      * `更新在架应用详情 <https://developer.huawei.com/consumer/cn/doc/app/game-center-upgrade-detail-0000001239525221>`__
      * `升级应用版本 <https://developer.huawei.com/consumer/cn/doc/app/game-center-upgrade-version-0000001194325288>`__
      * `分阶段发布 <https://developer.huawei.com/consumer/cn/doc/app/game-center-stage-releasing-0000001194485288>`__

   * 游戏维护

      * `催促/撤销审核 <https://developer.huawei.com/consumer/cn/doc/app/game-center-push-check-0000001194005348>`__
      * `下架应用 <https://developer.huawei.com/consumer/cn/doc/app/game-center-removing-0000001194165316>`__
      * `回退版本 <https://developer.huawei.com/consumer/cn/doc/app/game-center-rolling-back-0000001239365229>`__
      * `删除应用 <https://developer.huawei.com/consumer/cn/doc/app/game-center-deleting-0000001239645257>`__
      * `应用认领 <https://developer.huawei.com/consumer/cn/doc/app/game-center-claiming-0000001239525223>`__
      * `游戏转移 <https://developer.huawei.com/consumer/cn/doc/app/game-center-transferring-0000001194325290>`__
      * `应用信用记录 <https://developer.huawei.com/consumer/cn/doc/app/game-center-viewing-credit-record-0000001194485290>`__
      * `版本历史记录 <https://developer.huawei.com/consumer/cn/doc/app/game-center-viewing-history-record-0000001239205273>`__

   * 游戏运营

      * 活动运营

         * `礼包管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-gifts-0000001239505383>`__
         * `活动管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-all-0000001657534737>`__
            * `概述 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-overview-0000001704790612>`__
            * `预约有奖 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-reservation-0000001657694701>`__
            * `安装有奖 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-install-0000001657934421>`__
            * `登录有奖 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-login-0000001608734802>`__
            * `提升付费 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-increase-payment-0000001683109285>`__
            * `流失召回 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-loss-recall-0000001634589718>`__
            * `查看活动效果 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-results-0000001657854465>`__
            * `管理已创建活动 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-management-0000001736814990>`__
            * `参数说明 <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-param-0000001608575030>`__
            * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-faq-0000001608894534>`__

      * 内容运营

         * `《重磅更新》栏目 <https://developer.huawei.com/consumer/cn/doc/app/game-center-renewing-program-0000001194142418>`__
         * `《CG鉴赏家》栏目 <https://developer.huawei.com/consumer/cn/doc/app/game-center-cg-program-0000001239622345>`__

      * 用户运营

         * `社区管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-community-operation-0000001194305462>`__
         * `互动评论 <https://developer.huawei.com/consumer/cn/doc/app/game-center-interaction-comments-0000001239182361>`__
         * `开发者的话 <https://developer.huawei.com/consumer/cn/doc/app/game-center-developers-message-0000001194302396>`__

      * 商品管理

         * `图说商品管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-product-pic-0000001281541678>`__
         * `创建应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/game-center-creating-product-0000001239502323>`__
         * `修改应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/game-center-modifying-product-0000001194142420>`__
         * `设置自动刷新价格 <https://developer.huawei.com/consumer/cn/doc/app/game-center-refreshprice-0000001265298710>`__
         * `激活/失效应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/game-center-deactivating-product-0000001239622347>`__
         * `删除/还原应用内商品 <https://developer.huawei.com/consumer/cn/doc/app/game-center-deleting-product-0000001193982456>`__
         * `管理订阅组 <https://developer.huawei.com/consumer/cn/doc/app/game-center-managing-subscription-group-0000001243784855>`__
         * `管理商品营销 <https://developer.huawei.com/consumer/cn/doc/app/game-center-managing-product-marketing-0000001198744990>`__
         * `换算规则描述 <https://developer.huawei.com/consumer/cn/doc/app/game-center-conversion-rule-description-0000001239182363>`__
         * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/game-center-productmanagement-faq-0000001194302398>`__

      * 游戏信息管理

         * `成就管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-achievement-management-0000001196235092>`__
         * `事件管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-event-management-0000001196395082>`__
         * `排行榜管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-leaderboard-management-0000001241315031>`__
         * `版署实名认证申请 <https://developer.huawei.com/consumer/cn/doc/app/game-center-identification-applyfor-0000001193982458>`__

      * `数据运营 <https://developer.huawei.com/consumer/cn/doc/app/game-center-data-operation-0000001194165818>`__

   * 游戏出海经营服务

      * 业务介绍

         * `业务概述 <https://developer.huawei.com/consumer/cn/doc/app/game-center-growthforgame-introduction-0000001380865301>`__
         * `产品优势 <https://developer.huawei.com/consumer/cn/doc/app/game-center-growthforgames-advantages-0000001329745380>`__

      * 管理工具

         * `人员管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-personnel-0000001310212570>`__
         * `投放帐号管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-placement-account-0000001427630289>`__
         * `分发帐号管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-distribution-accounts-0000001362932441>`__
         * `归因帐号管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-attribution-account-0000001457257185>`__
         * `应用管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-apps-0000001310052918>`__
         * `项目管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-projects-0000001309893098>`__
         * `导出任务管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-tasks-0000001309733134>`__

      * 数据分析

         * 经营分析报表

            * `游戏数据 <https://developer.huawei.com/consumer/cn/doc/app/game-center-gaming-data-0000001377150406>`__
            * `渠道账单 <https://developer.huawei.com/consumer/cn/doc/app/game-center-app-market-bills-0000001310212574>`__
            * `经营对账 <https://developer.huawei.com/consumer/cn/doc/app/game-center-operation-reconciliation-0000001377310018>`__

         * 广告投放报表

            * `帐户报表 <https://developer.huawei.com/consumer/cn/doc/app/game-center-account-report-0000001427429893>`__
            * `素材报表 <https://developer.huawei.com/consumer/cn/doc/app/game-center-materials-0000001427549789>`__
            * `归因报表 <https://developer.huawei.com/consumer/cn/doc/app/game-center-attribution-report-0000001411683364>`__
            * `变现报表 <https://developer.huawei.com/consumer/cn/doc/app/game-center-monetization-report-0000001490495209>`__

      * 素材

         * `素材管理 <https://developer.huawei.com/consumer/cn/doc/app/game-center-ad-assets-0000001537447261>`__

   * 附录

      * `游戏侵权投诉方案 <https://developer.huawei.com/consumer/cn/doc/app/game-center-infringement-complaint-0000001193982448>`__
      * `魔方创意 <https://developer.huawei.com/consumer/cn/doc/app/game-center-creatives-ideas-0000001429732169>`__
      * `详情页素材规范及示例 <https://developer.huawei.com/consumer/cn/doc/app/game-center-detail-standrad-0000001194302402>`__
      * `宣传素材规范及示例 <https://developer.huawei.com/consumer/cn/doc/app/game-center-publicity-standard-0000001194462398>`__
      * `重点机型适配名单 <https://developer.huawei.com/consumer/cn/doc/app/game-center-key-model-0000001195442498>`__
      * `联运游戏接入流量变现服务 <https://developer.huawei.com/consumer/cn/doc/app/game-center-uni-access-ads-0000001240482397>`__
      * `商品管理国家/地区、语言、币种列表 <https://developer.huawei.com/consumer/cn/doc/app/game-center-supported-countries-overview-0000001369635946>`__
      * `谷歌文件转换小工具 <https://developer.huawei.com/consumer/cn/doc/app/game-center-conversion-tool-0000001425832693>`__

* AppTouch

   * `业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/jieshao-0000001063049556>`__

   * 应用管理

      * `应用管理操作指南 <https://developer.huawei.com/consumer/cn/doc/app/caozuo-0000001061893699>`__
      * `版权争议操作指南 <https://developer.huawei.com/consumer/cn/doc/app/banquan-0000001062004049>`__
      * `下架指南 <https://developer.huawei.com/consumer/cn/doc/app/xiajia-0000001062574364>`__

   * 联运服务

      * `联运服务协议网签指南 <https://developer.huawei.com/consumer/cn/doc/app/qianshu-0000001061894447>`__
      * `联运合作伙伴指南 <https://developer.huawei.com/consumer/cn/doc/app/lianyun-0000001061684085>`__
      * `协议补充说明 <https://developer.huawei.com/consumer/cn/doc/app/buchong-0000001172247481>`__
      * `VIP Service业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/huiyuan-0000001076181552>`__

   * `渠道推广操作指导 <https://developer.huawei.com/consumer/cn/doc/app/qudao-0000001062732560>`__
   * `报表操作指导 <https://developer.huawei.com/consumer/cn/doc/app/five-0000001063052146>`__

   * 内容接入开发指导

      * AppTouch项目

         * `应用联运接入 <https://developer.huawei.com/consumer/cn/doc/app/yingyong-0000001262131418>`__
         * `VIP Service联运接入 <https://developer.huawei.com/consumer/cn/doc/app/vipjr-0000001309451541>`__
      * `InTouch项目 <https://developer.huawei.com/consumer/cn/doc/app/neir-0000001061894449>`__

   * FAQ

      * `AppTouch项目 <https://developer.huawei.com/consumer/cn/doc/app/hmsfaq-0000001062414372>`__
      * `InTouch项目 <https://developer.huawei.com/consumer/cn/doc/app/czfaq-0000001062004051>`__

* 快应用

   * `华为快应用白皮书 <https://developer.huawei.com/consumer/cn/doc/app/quickapp-whitepaper-0000001476803500>`__
   * `快应用简介 <https://developer.huawei.com/consumer/cn/doc/app/quickapp-introduction-0000001476804736>`__
   * `分发场景 <https://developer.huawei.com/consumer/cn/doc/app/quickapp-scenario-0000001527764277>`__
   * `流量资源 <https://developer.huawei.com/consumer/cn/doc/app/quickapp-business-0000001477284172>`__

* PC应用

   * `华为应用市场Windows版业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/chenchuhao-0000001146584957>`__

* 智慧屏应用

   * `业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/50401>`__
   * `应用UI设计规范 <https://developer.huawei.com/consumer/cn/doc/app/智慧屏应用UI设计规范>`__
   * `应用接入指南 <https://developer.huawei.com/consumer/cn/doc/app/50404>`__
   * `结算对账FAQ <https://developer.huawei.com/consumer/cn/doc/app/50403>`__

* 车机应用

   * `业务介绍 <https://developer.huawei.com/consumer/cn/doc/app/ins-0000001064954596>`__
   * `UI设计规范 <https://developer.huawei.com/consumer/cn/doc/app/ui-0000001064106567>`__
   * `FAQ <https://developer.huawei.com/consumer/cn/doc/app/faq-0000001063754775>`__



