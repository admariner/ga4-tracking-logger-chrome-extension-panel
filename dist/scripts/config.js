const keyMap = {
    '.*custom_map_dimension(.*)$': 'cd$1',
    '.*anonymize_ip$': 'aip',
    '.*Apotheken Name$': 'cd1',
    '.*Apotheken Adresse$': 'cd2',
    '.*Apotheken Id$': 'cd3',
    '.*Apotheken Plz$': 'cd4',
    '.*affiliation$': 'cd5',
    '.*isAnonymous$': 'cd6',
    '.*URL Fragment$': 'cd7',
    '.*lastPageBeforeCheckout$': 'cd8',
    '.*send_page_view$': 'send_page_view',
    '.*user_properties_(.*)$': 'up.$1',
    '.*content_group(.*)': 'cg$1',
    '.*send_to.*': 'send_to',
    '.*page_location': 'dl',
    '.*page_title': 'dt',
    '.*language': 'ul',
    '.*screen_resolution': 'sr',
    '.*client_id': 'cid',
    '.*allow_display_features': 'adf',
    '.*allow_ad_personalization_signals': 'aps',
    '.*cookie_domain': 'cd',
    '.*cookie_expires': 'ce',
    '.*cookie_flags': 'cf',
    '.*cookie_path': 'cp',
    '.*cookie_update': 'cu',
    '.*is_legacy_converter': 'ilc',
    '.*is_legacy_converted': 'ilcv',
    '([^_]*)_event_category$': 'ec',
    '([^_]*)_event_label$': 'el',
    '([^_]*)_percent_scrolled$': 'percent_scrolled',
    '.*content_type': 'content_type',

    '([^_]*)_item_list_name$': 'il$1nm',
    '([^_]*)_items_([^_]*)_(item_|)id$': 'il$1pi$2id',
    '([^_]*)_items_([^_]*)_(item_|)name$': 'il$1pi$2nm',
    '([^_]*)_items_([^_]*)_(item_|)brand$': 'il$1pi$2br',
    '([^_]*)_items_([^_]*)_(item_|)variant$': 'il$1pi$2va',
    '([^_]*)_items_([^_]*)_(item_|)category$': 'il$1pi$2ca',
    '([^_]*)_items_([^_]*)_quantity$': 'il$1pi$2qt',
    '([^_]*)_items_([^_]*)_price$': 'il$1pi$2pr',
    '([^_]*)_items_([^_]*)_(index|list_position)$': 'il$1pi$2ps',
    '([^_]*)_items_([^_]*)_list_name$': 'il$1pi$2ln',
    // Add more key mappings here
    // For example: 'item_id$': 'piid' (matches keys ending with 'item_id')
};

const columnNamesBlacklist = ["_ee","_et","_eu","_gaz","_gid","_ono","_p","_r","_slc","_u","_v","a","adf","aip","aps","cd","ce","cf","cid","cos","cp","cu","gjid","gtm","gtm.elementClasses","gtm.elementId","gtm.elementTarget","gtm.elementUrl","gtm.element_jQuery370067025086784166032_settings_background_background","gtm.scrollDirection","gtm.scrollThreshold","gtm.scrollUnits","gtm.triggers","ilcv","ir","je","jid","jsscut","ni","sct","sd","seg","sid","sr","uaa","uab","uafvl","uam","uamb","uap","uapv","uaw","ul","v","vp","z"];