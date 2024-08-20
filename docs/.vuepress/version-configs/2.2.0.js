/* set version */
let version = '2.2.0';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = [
    [setVersionPrefix('introduction/introductions'), 'المقدمة'],

    {
        title: 'انواع المنتجات',
        path: setVersionPrefix('products'),
        collapsable: true,
        children: setVersionPrefix([
            ['products/simple', 'المنتج البسيط'],
            ['products/configurable', 'المنتج القابل للتكوين'],
            ['products/virtual', 'المنتج الالكتروني'],
            ['products/bundle', 'المنتج الحزمة '],
            ['products/grouped', 'المنتج المجمع'],
            ['products/downloadable', 'المنتج القابل للتنزيل'],
        ])
    },
    {
        title: 'الفئات',
        path: setVersionPrefix('category'),
        collapsable: true,
        children: setVersionPrefix([
            ['category/create-category', 'انشاء فئة'],
        ])
    },
    {
        title: 'السمات او الخصائص',
        path: setVersionPrefix('attribute'),
        collapsable: true,
        children: setVersionPrefix([
            ['attribute/product-attribute', 'انشاء سمة للمنتج'],
            ['attribute/attribute-input', 'نوع حقول إدخال السمات'],
        ])
    },
    
    [setVersionPrefix('attribute-family/attribute-families'), 'Attribute Family'],

    {
        title: 'الطلبات',
        path: setVersionPrefix('orders'),
        collapsable: true,
        children: setVersionPrefix([
            ['orders/create-order', 'الطلبات'],
            ['orders/create-invoice', 'الفواتير'],
            ['orders/create-shipment', 'الشحنات'],
            ['orders/refunds', 'المرتجعات'],
            ['orders/reorder', 'إعادة طلب'],
            ['orders/admin-order', 'طلبات المسؤل'],
        ])
    },
    {
        title: 'العملاء',
        path: setVersionPrefix('customer'),
        collapsable: true,
        children: setVersionPrefix([
            ['customer/create-customer', 'العملاء'],
            ['customer/customer-groups', 'المجموعات'],
            ['customer/customer-reviews', 'التقيمات'],
        ])
    },

    [setVersionPrefix('cms/cms-page'), 'CMS - نظام إدارة المحتوى'],

    {
        title: 'التسويق',
        path: setVersionPrefix('marketing'),
        collapsable: true,
        children: setVersionPrefix([
            ['marketing/promotions', 'العروض الترويجيه'],
            ['marketing/communications', 'التواصل'],
            ['marketing/searchseo', 'البحث & SEO'],
        ])
    }, 
    {
        title: 'الإعدادات',
        path: setVersionPrefix('settings'),
        collapsable: true,
        children: setVersionPrefix([
            ['settings/locale', 'اللغات'],
            ['settings/currencies', 'العملات'],
            ['settings/exchange-rates', 'مصارفة العملات'],
            ['settings/inventory-source', 'مصدر المخزون'],
            ['settings/channels', 'القنوات'],
            ['settings/users', 'المستخدمون'],
            ['settings/roles', 'الادوار'],
            ['settings/themes', 'القوالب - Themes'],
            ['settings/taxes', 'الضرائب'],
            ['settings/data-transfer', 'نقل البيانات'],
        ])
    },

    [setVersionPrefix('configure/configurations'), 'التكوين'],  

    [setVersionPrefix('magic/magic-ai'), 'الذكاء الاصطناعي السحري'],  
    
]
